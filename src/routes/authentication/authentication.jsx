// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


import RegisterForm from '../../components/register/register-form';
import LoginForm from '../../components/login/login-form';

import { AuthContainer } from './authentication.styles';


const Authentication = () => {
    // useEffect(() => {
    //     async function fetchData(){
    //     const response = await getRedirectResult(auth);
    //     if (response){
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //     }
    // }}, []);
    
   
    return (
        // <h1>Sign In Page</h1>
        <AuthContainer>
            
            <LoginForm />
            <RegisterForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </AuthContainer>
    )
}

export default Authentication;