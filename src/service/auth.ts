// Firebase Auth / Provider

import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider  } from "firebase/auth" 

const auth = getAuth();

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

export const logout = () => {
    return signOut(auth).then(() => {
        return "성공적으로 로그아웃 되었습니다."
    }).catch((error) => {
        return `오류 발생: ${error}`
    })
}