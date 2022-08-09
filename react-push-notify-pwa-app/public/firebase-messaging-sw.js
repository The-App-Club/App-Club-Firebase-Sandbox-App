// https://github.com/firebase/quickstart-js/blob/master/messaging/firebase-messaging-sw.js#L14-L36
importScripts(
  'https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'HERE_YOUR_KEY',
  authDomain: 'hoge.firebaseapp.com',
  projectId: 'hoge',
  storageBucket: 'hoge.appspot.com',
  messagingSenderId: 'HERE_YOUR_KEY',
  appId: 'HERE_YOUR_KEY',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
