import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../../assets/loginImg.svg";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials!!");
    } else {

      window.alert("Login Successfull");

      navigate("/");
    }
  };

  return (
    <>
      <div className="container-fluid login__container ">
        <div className="row  justify-center">

          <div className="col-10 col-md-5 col-lg-6 ">
            <img src={loginImg} className="login__Image " alt="Login" />
          </div>

          <div className="col-10 col-md-7 col-lg-6  flex flex-col justify-center ">
            <form method="POST" className="form__tag">
              <p className="login__heading1">Welcome</p>
              <p className="login__heading2">Login to access your account</p>

              <input
                type="email"
                className="form__input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Username or Email"
              />

              <input
                type="password"
                className="form__input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="InputPassword"
                placeholder="Password"
              />

              <button type="submit" className="login__btn" onClick={loginUser}>
                SignIn
              </button>

              <Link to="/registration" className="other__links">
                Don't have an account? SignUp
              </Link>

              {/* ADD FORGOT PASSWORD LINK HERE  */}
              <Link className="other__links forgot__pass">Forgot Password</Link>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
