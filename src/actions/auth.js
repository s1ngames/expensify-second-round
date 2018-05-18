import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
  });

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);//start the login with google auth provider, using popup, return for chain promises
    };//auto remember users - auto login
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};



