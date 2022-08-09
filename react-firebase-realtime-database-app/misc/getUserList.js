// https://firebase.google.com/docs/database/web/start
import {db} from './credential.js';
import {get, ref, query} from 'firebase/database';

// https://firebase.google.com/docs/database/web/read-and-write
function getUserList({}) {
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

(async () => {
  const resultInfo = await getUserList({});
  console.log(resultInfo);
})();
