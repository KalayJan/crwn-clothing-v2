import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopUp, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultformFields = {
    email: '',
    password: ''
};


const SignInForm = () => {

    const [formFields, setformFields] = useState(defaultformFields);
    const { email, password } = formFields;

    const resetFormfields = () => {
        setformFields(defaultformFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormfields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for this emal!');
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error)
            }
            // if (error.code === "auth/wrong-password") {
            //     alert('Password is incorrect!');
            // } else if (auth / user - not - found);
            // console.log(error);
        };
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformFields({ ...formFields, [name]: value })
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Name' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit"> Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign-In</Button>
                </div>

            </form>

        </div>
    )
}

export default SignInForm;