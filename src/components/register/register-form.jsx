import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import './register-form.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const RegisterForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password != confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {displayName});
            resetFormFields();
            
        }
        catch(err){
            if(err.code == 'auth/email-already-in-use'){
                alert('This email is already in use.')
            }
            console.log('user creation encountered error', err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput 
                    label="Display Name"
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName,
                    }}
                />

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

                <FormInput 
                    label="Confirm Password"
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword,
                    }}
                    
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}
export default RegisterForm;