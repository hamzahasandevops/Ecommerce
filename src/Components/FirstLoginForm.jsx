import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import InterFace from "./Frontened/InterFace";
export default function FirstLoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    if (email === "" && password === "" && name === "") {
      alert("please fill all the information");
    } else {
      setIsAuthenticated(true);
      console.log(setIsAuthenticated);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <InterFace />
      ) : (
        <div className="d-inline-flex w-50 flex-column border border-2">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="form-control w-25"
                type="name"
                value={name}
                name="name"
                placeholder="Enter your name here"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="form-control w-25"
                type="email"
                value={email}
                name="email"
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                className="form-control w-25"
                type="password"
                value={password}
                name="password"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary">Submit</button>
            <Link className="btn btn-primary " to="/FirstSignUpForm">
              SignUp
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
