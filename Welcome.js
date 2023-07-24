import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = ()=>{
    const googleSignIn =() => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    };

    return (
        <main className="welcome">
            <h1>Welcome to get Connected</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRB6XA1tYvgqtTjmrlQBRFIkbXSw63N_bS1rJr-SXAEDkIf5sOpC5topSFYqWLL9gmv0&usqp=CAU" alt="ReactJs logo" width={50} heigth={50}/>
            <p>Sign in with Google to chat with your fellow Friends.</p>
            <button className="sign-in">
                <img 
                onClick={googleSignIn}
                src={GoogleSignin}
                alt="sign in with google"
                type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;