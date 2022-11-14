import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup, 
    // signInWithGoogleRedirect,
    createUserDocFromAuth,
} from '../../utils/firebase/firebase';

import RegisterForm from '../../components/register/register-form';


const SignIn = () => {
    // useEffect(() => {
    //     async function fetchData(){
    //     const response = await getRedirectResult(auth);
    //     if (response){
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //     }
    // }}, []);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);

    };
   
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <RegisterForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn;