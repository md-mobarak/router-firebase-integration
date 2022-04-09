import { getAuth } from 'firebase/auth';
import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const form = location?.state?.form?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(form, { replace: true })
            })
    }
    // const { user, setUser, signInWithGoogle } = useFirebase()

    return (
        <div>
            <h2> Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn}>Google SignIn</button>
            </div>
            <form>

                <input type="email" name="" id="" placeholder='Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;