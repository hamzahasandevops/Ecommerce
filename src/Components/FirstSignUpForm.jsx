import React from "react";
import { useState } from "react";
import InterFace from "./Frontened/InterFace";

export default function FirstSignUphtmlForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" && email === "" && password.length === 0) {
      return alert("Please fill your form first");
    } else {
      setIsAuthenticated(true);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <InterFace />
      ) : (
        <div className="border border-2 w-50 m-auto mt-5 p-5 bg-dark text-light">
          <label>
            <strong
              style={{ position: "relative", left: "300px", fontSize: "40px" }}
            >
              SignUp
            </strong>
          </label>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="examplehtmlFormControlInput1"
                className="htmlForm-label"
              >
                Name :
              </label>
              <input
                type="text"
                value={name}
                className="form-control "
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name here"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="examplehtmlFormControlInput1"
                className="htmlForm-label"
              >
                Email address :
              </label>
              <input
                type="email"
                className="form-control "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="examplehtmlFormControlInput1"
                className="htmlForm-label"
              >
                Password :
              </label>
              <input
                type="password"
                className="form-control "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=". . . . ."
              />
            </div>
            <button type="submit" className="btn btn-outline-info">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
