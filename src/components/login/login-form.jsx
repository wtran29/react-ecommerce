import { useState } from "react";
import { createAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import './login-form.scss';

const signInFormFields = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const [formFields, setFormFields] = useState(signInFormFields);
    const { email, password } = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(signInFormFields)
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
            
        }
        catch(err){
            switch(err.code){
                case "auth/wrong-password":
                    alert("Incorrect password for email");
                    break
                case "auth/user-not-found":
                    alert("No user associated with this email");
                    break
            }
            
            console.log(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };
    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >

                <FormInput 
                    label="Email"
                    inputOptions={{
                        type: "email",
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email,
                    }}
                />

                <FormInput 
                    label="Password"
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password,
                    }}
                    
                />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}
export default LoginForm;