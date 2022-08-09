// https://firebase.google.com/docs/database/web/start
import {db} from './credential.js';
import {get, ref, query, orderByChild} from 'firebase/database';

// https://firebase.google.com/docs/database/web/read-and-write
function getPostListOrderBy({}) {
  // https://firebase.google.com/docs/reference/node/firebase.database.Query
  return new Promise((resolve, reject) => {
    const resultInfoList = [];
    try {
      const postsRef = query(ref(db, 'posts'), orderByChild('metrics/views'));
      get(postsRef).then((dataSnapshot) => {
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
  const resultInfo = await getPostListOrderBy({});
  console.log(resultInfo);
})();
