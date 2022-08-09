// https://firebase.google.com/docs/database/web/start
import {db} from './credential.js';
import {ref, set} from 'firebase/database';
import {v4 as uuid} from 'uuid';

// https://firebase.google.com/docs/database/web/read-and-write
function addCommentData({userId = uuid(), name, age}) {
  return new Promise(async (resolve, reject) => {
    try {
      await set(ref(db, 'users/' + userId), {
        username: name,
        age: age,
      });
      resolve({status: 0, message: 'success'});
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}

(async () => {
  const resultInfo = await addCommentData({
    name: 'popo',
    age: 32,
  });
  console.log(resultInfo);
})();
