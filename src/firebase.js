import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAMBRLNF19PMoR4ZAisFZvWFcLSo0KWI50",
    authDomain: "ugchat-58190.firebaseapp.com",
    projectId: "ugchat-58190",
    storageBucket: "ugchat-58190.appspot.com",
    messagingSenderId: "1084900250658",
    appId: "1:1084900250658:web:090d8546c0a5121b87a67b",
    measurementId: "G-SGEL0E4KZE"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
  
  
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  
  
  
  