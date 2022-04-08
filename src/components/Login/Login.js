import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const { user, setUser, signInWithGoogle } = useFirebase()

    return (
        <div>
            <h2> Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google SignIn</button>
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