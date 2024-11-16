import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo-genaid.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import Nav from "../components/Navbar/Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    const validateEmail = () => {
      if (email === "" && emailTouched) {
        setEmailError("Email is required");
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailTouched && !emailRegex.test(email)) {
          setEmailError("Invalid email address");
        } else {
          setEmailError("");
        }
      }
    };

    const validatePassword = () => {
      if (password === "" && passwordTouched) {
        setPasswordError("Password is required");
      } else if (passwordTouched && password.length < 6) {
        setPasswordError(
          "Invalid password, must be at least 6 characters long"
        );
      } else {
        setPasswordError("");
      }
    };

    validateEmail();
    validatePassword();
  }, [email, password, emailTouched, passwordTouched]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      setEmailTouched(true);
    }
    if (!password) {
      setPasswordError("Password is required");
      setPasswordTouched(true);
    }

    if (!emailError && !passwordError && email && password) {
      const newEntry = { email, password };
      setSubmittedData([...submittedData, newEntry]);
      alert(
        `Form submitted successfully! Your email ${email} has been submitted.`
      );
      console.log(email, password);

      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
      setEmailTouched(false);
      setPasswordTouched(false);
    } else {
      alert("Please fill in all required fields and fix any errors.");
    }
  }

  function handleHidePassword(e) {
    e.preventDefault();
    setHidePassword(!hidePassword);
  }

  return (
    <>
        <Nav back />


    <div className="  flex flex-col items-center justify-center min-h-screen ">
      <section className="flex justify-center items-center mb-4">
        <img src={logo} alt="logo" className="w-[60%]" />
      </section>

      <h1 className="mb-4 text-3xl font-bold  ">Login Details</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6  shadow-xl w-full max-w-sm rounded-lg"
        autoComplete="off"
      >
        <div className="  mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailTouched(true)}
            autoComplete="chrome-off"
            className={`shadow appearance-none border  rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailError ? "border-orange-400" : ""
            }`}
          />

          {emailError && emailTouched && (
            <p className="text-red-500 text-xs italic mt-2">{emailError}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={hidePassword ? "password" : "text"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordTouched(true)} // Set passwordTouched to true on focus
            autoComplete="new-password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              passwordError ? "border-orange-400" : ""
            }`}
          />
          <div className="flex items-center mt-2 gap-28 ">
            <button
              onClick={handleHidePassword}
              className="text-sm text-blue-500 hover:underline focus:outline-none"
            >
              {hidePassword ? "Show Password" : "Hide Password"}
            </button>
            <button className=" text-sm"> Foget password ?</button>
          </div>
          {passwordError && passwordTouched && (
            <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-ga-primary
           hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-md text-2xl  h-16"
          >
            Login
          </button>
        </div>
        <p className="m-4 text-center">Or Sign in With</p>

        <div className=" flex justify-center gap-6 text-3xl ">
          <IoLogoGoogle />
          <FaFacebookF />
          <FaApple />
        </div>
      </form>

      <p className="m-4">Don't have an account ? Register Now</p>
    </div>
    </>
  );
};

export default Login;
