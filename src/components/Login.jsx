import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 bg-gray-600 placeholder-gray-200 w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-600 placeholder-gray-200 w-full rounded-lg"
        />
        {!isSignInForm && (
          <label>
            <input type="checkbox" className="my-4" /> I agree to the Terms of
            Service and Privacy Policy.
          </label>
        )}
        <button type="submit" className="p-2 my-4 bg-red-700 w-full rounded-lg">
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
