
import { initializeApp } from 'firebase/app'
import { getAuth, 
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNR7RsL8OYqYgNTL2db0QXUHa_dyUvDu0",
    authDomain: "elijah-clothing-db.firebaseapp.com",
    projectId: "elijah-clothing-db",
    storageBucket: "elijah-clothing-db.appspot.com",
    messagingSenderId: "61114045015",
    appId: "1:61114045015:web:1c80c8eba8798c8d80c912"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const dataBase = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(dataBase, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();
    
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    } catch (error) {
        console.log('There is an error', error.message);
    }
 }

 return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {

  if (!email || !password) return;
  return await createUserWithEmailAndPassword ( auth,email, password );
};