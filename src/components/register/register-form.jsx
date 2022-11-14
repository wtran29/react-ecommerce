import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase";

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit} >
                <label>Display Name</label>
                <input 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />

                <label>Email</label>
                <input 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />

                <label>Confirm Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default RegisterForm;