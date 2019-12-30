import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config =
{
    apiKey: "AIzaSyCb5uuluPeFh9bkx397LpzOO5S3fJlXeMk",
    authDomain: "tothefood-66287.firebaseapp.com",
    databaseURL: "https://tothefood-66287.firebaseio.com",
    projectId: "tothefood-66287",
    storageBucket: "tothefood-66287.appspot.com",
    messagingSenderId: "312542502744",
    appId: "1:312542502744:web:0bf646a32da7b70ecd0f2d",
    measurementId: "G-8X9TLQ3Z1S"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


//   google authentication 

const provider = new firebase.auth.GoogleAuthProvider();
export const SignInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase