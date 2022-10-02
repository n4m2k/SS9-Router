import React from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ login, setLogin }) => {
  const navigate = useNavigate();
  const hanldeLoginClick = () => {
    setLogin(true);
    navigate("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={hanldeLoginClick}>Login</button>
    </div>
  );
};

export default Login;
