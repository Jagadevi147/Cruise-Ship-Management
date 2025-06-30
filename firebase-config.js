// Paste your own Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyCEzsR9XmZ5qQCz9UW8giUQiYTvR7Pc0Zw",
  authDomain: "cruise-ship-management-73fb3.firebaseapp.com",
  projectId: "cruise-ship-management-73fb3",
  storageBucket: "cruise-ship-management-73fb3.firebasestorage.app",
  messagingSenderId: "775809407188",
  appId: "1:775809407188:web:f5904ceb32ac6dcd504341",
  measurementId: "G-MVCDHDDR54",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
