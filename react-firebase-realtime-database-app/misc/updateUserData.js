// https://firebase.google.com/docs/database/web/start
import {db} from './credential.js';
import {ref, set, update} from 'firebase/database';
import {v4 as uuid} from 'uuid';

// https://firebase.google.com/docs/database/web/read-and-write
function updateCommentData({userId = uuid(), name, age}) {
  // https://firebase.google.com/docs/reference/node/firebase.database.Reference#update
  // https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html
  return new Promise(async (resolve, reject) => {
    try {
      await update(ref(db, 'users/' + userId), {
        age: age,
      });
      resolve({status: 0, message: 'success'});
    } catch (error) {
      reject({status: 0, message: JSON.stringify(error)});
    }
  });
}

(async () => {
  const resultInfo = await updateCommentData({
    userId: `3dec4cc0-8640-11ec-b6e0-00155dbad3b8`,
    age: 44,
  });
  console.log(resultInfo);
})();
