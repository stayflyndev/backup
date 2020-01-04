import firebase from 'firebase/app';
import 'firebase/auth'; //.auth method
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




//   userauth is the object after signing in 
  // export const createUserProfileDoc = async (userAuth, additionalData) => {

  //   if(!userAuth) return;
  //   const userRef = firestore.doc(`users/${userAuth.uid}`)
   
  //   const snapShot = await userRef.get()
  //   console.log(snapShot)
  //   console.log(userRef)

  //   if(!snapShot.exists){
  //       // what data to use to create the fb doc?

  //       const {displayName, email } = userAuth;
  //       const createdAt = new Date();

  //       try {
  //           await userRef.set({
  //               displayName,
  //               email,
  //               createdAt,
  //               ...additionalData
  //           })

  //       } catch (error){
  //           console.log('error : ' + error.message)
  //       }
  //   }

  //   return userRef
  // }


  // firebase setup  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


//   google authentication 

const provider = new firebase.auth.GoogleAuthProvider();
export const SignInWithGoogle = () => auth.signInWithRedirect(provider);


// store the authenticated user in the firestore (database) 
export const storeUserProfileDocument = async (authUser, otherDetails) => {
  if(!authUser) return //exit;

console.log(firestore.doc('users/8'))

} 

export default firebase