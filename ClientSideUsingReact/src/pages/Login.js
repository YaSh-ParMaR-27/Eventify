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
      <div className="login_container container  h-[90vh]   ">
        <div className="row pt-4 pt-lg-0 mt-16 md:mt-12 lg:mt-4">
          <div className=" col-md-6 col-lg-5  md:block hidden ">
            <img src={loginImg} className="img-fluid w-100 h-auto" alt="" />
          </div>
          <div className="col-md-6 col-lg-7 flex flex-col justify-center form_container">
            <div className="forFormOuterBorder">
              <form
                method="POST"
                className="form-group formContent flex flex-col gap-2 shadow-lg"
              >
                <CgProfile style={{ color: "007dff", fontSize: "80px" }} />
                <h1 className=" text-lg-2xl">Login to your account</h1>

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

                <Link to="/registration" className="formAnchor">
                  Don't have an account? SignUp
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
