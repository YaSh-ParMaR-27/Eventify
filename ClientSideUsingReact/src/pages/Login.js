import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/loginImg.jpg";
import { CgProfile } from "react-icons/cg";
import { useDataLayerValue } from "../dataStore/DataLayer";
import "./css/Login.css";

export default function Login() {
  const [state, dispatch] = useDataLayerValue();

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
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");

      navigate("/");
    }
  };

  return (
    <>
    <div className="form-container">

    
      <div className="login_container">
        <div className="row d-flex justify-content-center">
          <div className=" col-md-6 col-lg-5 d-flex  md:block hidden ">
            <img src={loginImg} className="img-fluid w-100 h-auto" alt="" />
          </div>
          <div className="col-md-6 col-lg-7 flex flex-col justify-center form_container">
            <div className="forFormOuterBorder">
              <form
                method="POST"
                className="form-group formContent flex flex-col gap-2"
              >
                {/* <CgProfile style={{ color: "007dff", fontSize: "80px" }} /> */}
                <p className="login-heading my-2">Login Now </p>
              <p className="text-secondary m-2">Login to you accout to access.</p>

                <input
                  type="email"
                  className="form-control form_input"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Username or Email"
                />

                <input
                  type="password"
                  className="form-control form_input"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="InputPassword"
                  placeholder="Password"
                />

                <button type="submit" className="btn" onClick={loginUser}>
                  SignIn{" "}
                </button>
                <hr />

                <Link to="/registration" className="login-other-links my-3">
                  Don't have an account? SignUp
                </Link>

                {/* ADD FORGOT PASSWORD LINK HERE  */}
                <a href="#" className="login-other-links">Forgot Password</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
