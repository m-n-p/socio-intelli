"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import "./Login.css";
import Footer from "../home/Main/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((user) => {
          console.log(user);
          window.location.href = "/chat";
        })
        .catch((err) => {
          if (err.code === "auth/wrong-password") {
            alert("Wrong Password! Try again.");
            passwordRef.current?.focus();
          } else if (err.code === "auth/too-many-requests") {
            alert("Too many requests! Try again later.");
          } else if (err.code === "auth/user-not-found") {
            alert("No such user found,signup first");
          }
          console.error(err.code);
        });
    }
  };

  return (
    <div className="relative w-screen h-screen loginback">
      <div
        className="relative w-full h-full bg-black bg-opacity-15"
        style={{ zIndex: 100 }}
      >
        <div className="loginContainer">
          <div className="logo flex items-center space-x-2">
            <h1 className="adventfont text-4xl tracking-wide text-white ">
              Genesis AI <sup>TM</sup> by
            </h1>
            <Link href={"/home"}>
              <Image
                width={200}
                height={200}
                src="/MontaLogo.png"
                alt="Market Unwinded Logo"
              />
            </Link>
          </div>

          <div className="formWrapper">
            <form className="form">
              <h1 className="title ">LogIn to Genesis AI</h1>
              <label className="inputLabel">Email</label>
              <input
                type="email"
                ref={emailRef}
                className="input"
                placeholder="Email Address"
                required
              />
              <label className="inputLabel">Password</label>
              <input
                type="password"
                ref={passwordRef}
                className="input"
                placeholder="Password"
                required
              />

              <div className="buttonContainer">
                <button onClick={signIn} type="submit" className="button">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 mx-auto flex items-center justify-center w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
