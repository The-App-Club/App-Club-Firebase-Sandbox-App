import got from 'got';
import dotenv from 'dotenv';
dotenv.config();
// https://firebase.google.com/docs/cloud-messaging/migrate-v1?hl=ja
// https://qiita.com/stake15/items/8938dd1ee5fa8f15225c

const projectId = 'hogehgoe';

const url = `https://fcm.googleapis.com/fcm/send`;

const payload = {
  to: 'hogehoge',
  notification: {
    title: '通知テスト',
    body: 'これはテストです',
  },
};

const {data} = await got
  .post(url, {
    headers: {
      Authorization: `key=${process.env.REACT_APP_FIREBASE_CLOUD_MESSAGING_SERVER_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .json();

console.log(data);
