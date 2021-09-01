import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyCOws-s_zomeTiVWE23B-bTrxQCqkr_gu0",
    authDomain: "complaint-forum-846d8.firebaseapp.com",
    projectId: "complaint-forum-846d8",
    storageBucket: "complaint-forum-846d8.appspot.com",
    messagingSenderId: "62515156813",
    appId: "1:62515156813:web:567dd5f09a1921e33d8904"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.firestore()

