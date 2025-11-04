import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";

const Error = ({ error }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full top-1/2 flex flex-col items-center">
        <p>Sorry you got an error {error}</p>
        <button
          className="p-4 m-4 bg-red-700 rounded-lg text-white font-semibold"
          onClick={handleClick}
        >
          Click here to Login Page
        </button>
      </div>
    </div>
  );
};

export default Error;
