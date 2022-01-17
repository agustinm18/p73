import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD_TpDUwGU0l6KIzYreDah3zikOH9gZrD0",
  authDomain: "class37-958d0.firebaseapp.com",
  databaseURL: "https://class37-958d0-default-rtdb.firebaseio.com",
  projectId: "class37-958d0",
  storageBucket: "class37-958d0.appspot.com",
  messagingSenderId: "429597797223",
  appId: "1:429597797223:web:5eb941e60273ca2b9e1dc2"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

