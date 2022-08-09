// https://firebase.google.com/docs/database/web/start
import {db} from '../firebase';
import {ref, set, update, get, query} from 'firebase/database';
import {v4 as uuid} from 'uuid';

// https://firebase.google.com/docs/database/web/read-and-write
function addCommentData({key = uuid(), addInfo}) {
  return new Promise(async (resolve, reject) => {
    try {
      await set(ref(db, 'comments/' + key), addInfo);
      resolve({status: 0, message: 'success'});
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}
// https://firebase.google.com/docs/database/web/read-and-write
function updateCommentData({key = uuid(), updateInfo}) {
  // https://firebase.google.com/docs/reference/node/firebase.database.Reference#update
  // https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html
  return new Promise(async (resolve, reject) => {
    try {
      await update(ref(db, 'comments/' + key), updateInfo);
      resolve({status: 0, message: 'success'});
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}

// https://firebase.google.com/docs/database/web/read-and-write
function getCommentDataList({}) {
  // https://firebase.google.com/docs/reference/node/firebase.database.Query
  return new Promise((resolve, reject) => {
    const resultInfoList = [];
    try {
      const usersRef = query(ref(db, 'comments/'));
      get(usersRef).then((dataSnapshot) => {
        dataSnapshot.forEach((childSnapshot) => {
          resultInfoList.push(
            Object.assign({id: childSnapshot.key}, childSnapshot.val())
          );
        });
        resolve({status: 0, message: 'success', data: resultInfoList});
      });
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}

// https://firebase.google.com/docs/database/web/read-and-write
function getCommentData({commentId}) {
  // https://firebase.google.com/docs/reference/node/firebase.database.Query
  return new Promise((resolve, reject) => {
    let resultInfo = {};
    try {
      const usersRef = query(ref(db, 'comments/'));
      get(usersRef).then((dataSnapshot) => {
        dataSnapshot.forEach((childSnapshot) => {
          if (commentId === childSnapshot.val().id) {
            resultInfo = Object.assign(
              {key: childSnapshot.key},
              childSnapshot.val()
            );
          }
        });
        resolve({status: 0, message: 'success', data: resultInfo});
      });
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}

export {addCommentData, updateCommentData, getCommentDataList, getCommentData};
