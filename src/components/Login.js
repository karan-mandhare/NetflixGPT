import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 mx-auto my-32 right-0 left-0 bg-opacity-80 text-white">
        <h1 className="text-3xl py-4 mb-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 m-2 w-full bg-gray-700 rounded-lg"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-3 m-2 my-4 bg-red-600 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignupForm} className="py-4 cursor-pointer">
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
