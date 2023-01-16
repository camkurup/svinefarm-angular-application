importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
 apiKey: "AIzaSyADimpor2WPUQuGG7gBkzhx3fYCR3AxooM",
 authDomain: "svinefarmen-40589.firebaseapp.com",
 databaseURL: "config data from general tab",
 projectId: "svinefarmen-40589",
 storageBucket: "svinefarmen-40589.appspot.com",
 messagingSenderId: "1028901208622",
 appId: "1:1028901208622:web:bb51d05aea7f6034f315bf",
 measurementId: "G-N4B0T8GKZR"
});
const messaging = firebase.messaging();