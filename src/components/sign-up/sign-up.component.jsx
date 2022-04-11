
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {

    const [formFields, setformFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            console.log('user creation encountered an error', error);
        };
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value })
    };

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign Up Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' type="displayName" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label='Name' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button buttonType='inverted' type="submit">
                    Sign Up</Button>
            </form>

        </div>
    )
}

export default SignUpForm;