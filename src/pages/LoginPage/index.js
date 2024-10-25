import React from "react";
import { auth, provider, signInWithPopup, db } from "../../firebase"; // Import db from firebase.js
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions
import "./style.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        // Reference to the Firestore "users" collection
        const userRef = doc(db, 'users', user.uid);

        // Check if the user document already exists
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
          // If the user does not exist, create a new user document
          await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            role: 'viewer', // Default role for a new user (can be changed later)
            createdAt: new Date(),
          });
          console.log('New user created in Firestore:', user.email);
        } else {
          console.log('User already exists in Firestore:', user.email);
        }

        // Navigate to the home page after successful sign-in
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google", error);
      });
  };

  return (
    <div className="login-page">
      <PageHeader
        title={"Login"}
        subtitle={"Bem-vindo ao NFS"}
        gradientColor="#19a3ff"
        height={"2.5%"}
      />
      <div className="login-container">
        <button onClick={signInWithGoogle} className="google-signin-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;