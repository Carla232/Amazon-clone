import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOx5H92uTB_JPBKWjsYg9m6JjOt79Mhjo",
    authDomain: "challenge-cacc6.firebaseapp.com",
    projectId: "challenge-cacc6",
    storageBucket: "challenge-cacc6.appspot.com",
    messagingSenderId: "391154343199",
    appId: "1:391154343199:web:19c1efcca777acd966242a",
    measurementId: "G-VR019QK00X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };