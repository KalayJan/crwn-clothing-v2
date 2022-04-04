import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {

    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopUp();
        const userDocref = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
};

export default SignIn;