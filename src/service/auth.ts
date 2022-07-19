// Firebase Auth / Provider

import { signInWithPopup, OAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth" 
import { auth } from 'firebaseConfig'

export const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export const signInGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}

export const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
}

export const signInMicrosoft = () => {
    const provider = new OAuthProvider('microsoft.com');
    return signInWithPopup(auth, provider);
}