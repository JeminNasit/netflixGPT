import React from "react";
import { useNavigate } from "react-router";

const Error = ({ error }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      Sorry you got an error ${error}
      Click to back to Login Page
      <button onClick={handleClick}>Go to Login</button>
    </div>
  );
};

export default Error;
