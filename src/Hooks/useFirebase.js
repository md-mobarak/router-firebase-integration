import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';


const auth = getAuth(app);
const useFirebase = () => {
    const [user, setUser] = useState({})



    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                // setUser(user)
                console.log(user);
            })
            .catch(error => {
                const errorms = error.message
                console.log(errorms);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch()
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    // return [user, setUser]
    return { user, setUser, signInWithGoogle, handleSignOut }
};

export default useFirebase;