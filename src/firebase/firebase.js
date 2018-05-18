//connect to the data base.
//other files can connect by import this file
import * as firebase from 'firebase';
//create object containing all named function in firebasemodule and use like firebase.something




const config = { //from firebase (connect to webapp)
    apiKey: "AIzaSyCJoSOvvyRjtLZIQvOqo77Hda5lss6ZzUc",
    authDomain: "expensify-2nd.firebaseapp.com",
    databaseURL: "https://expensify-2nd.firebaseio.com",
    projectId: "expensify-2nd",
    storageBucket: "expensify-2nd.appspot.com",
    messagingSenderId: "820435945223"
  };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider,  database as default };














