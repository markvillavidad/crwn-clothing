import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCKsCDMNcWksS8CWrWqY_fNavoLa3UrDac",
    authDomain: "crwn-db-e614c.firebaseapp.com",
    databaseURL: "https://crwn-db-e614c.firebaseio.com",
    projectId: "crwn-db-e614c",
    storageBucket: "crwn-db-e614c.appspot.com",
    messagingSenderId: "1024335679643",
    appId: "1:1024335679643:web:4910d7195ec1cc349c363e",
    measurementId: "G-Y7TBS6Q99Z"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
