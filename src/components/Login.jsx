import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate form data
    const message = checkValidData(
      isSignInForm,
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // sign in / sign up
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user signed up:", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/75109518?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // update store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
              // navigate("/error", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user signed up:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
          alt="backgroundImage"
        />
      </div>
      <form className="absolute p-12 bg-black rounded-lg text-white w-3/12 my-36 mx-auto left-0 right-0 opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-600 placeholder-gray-200 w-full rounded-lg"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 bg-gray-600 placeholder-gray-200 w-full rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-600 placeholder-gray-200 w-full rounded-lg"
          ref={password}
        />
        {!isSignInForm && (
          <label>
            <input type="checkbox" className="my-4" /> I agree to the Terms of
            Service and Privacy Policy.
          </label>
        )}
        {errorMessage && (
          <p className="text-red-500 p-2 my-4 w-full rounded-lg">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered - Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
