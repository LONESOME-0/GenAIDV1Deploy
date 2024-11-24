import { useState } from "react";
import Nav from "../components/Navbar/Nav";
import logo from "/public/img/logo-genaid.png";
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import { FaUser, FaLock } from "react-icons/fa";

function Register() {
  const [fromData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
  });

  const [errors ,setErrors] =useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationError = validateFrom(fromData)
    setErrors(ValidationError);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...fromData, [name]: value });
  };

  const validateFrom = (data) => {
    let errors = {};
    if(!data.fullname){
      errors.fullname = "Full name is required"
    }
    if(!data.email){
      errors.email = "Email is required"
    }
    if(!data.phone){
      errors.phone = "Phaone number is required"
    }
    if(!data.password){
      errors.password = "Password is required"
    }
    if(!data.repassword){
      errors.repassword = "Repassword is required"
    }
    return errors;
  }
  


  return (
    <>
      <Nav back title="" />
      <div className="  flex flex-col items-center justify-center min-h-screen lg:flex lg:flex-row  lg:gap-1  ">
        <section className="   flex justify-center items-center mb-4 ">
          <img src={logo} alt="logo" className="w-[60%] lg:w-[80%]" />
        </section>

        <from className="bg-white p-6  shadow-xl w-[80%]  max-w-sm rounded-3xl  lg:mr-24"
         onSubmit={handleSubmit}>
          <h1 className="mb-1 text-3xl font-bold  ">Lets Register Account</h1>
          <p className="mb-1 text-2xl font-medium text-center">
  
            Hello User, you have a greatful journey
          </p>
          <h1 className="m-7 font-bold text-2xl ml-2">Register</h1>


          <div className="  relative mb-5">
            <input
              type="text"
              name="fullname"
              value={fromData.fullname}
              placeholder="Fullname"
              className="shadow appearance-none border  rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
            {errors.fullname && <span>{errors.fullname}</span>}
            <FaUser className="absolute right-3 bottom-2 text-2xl opacity-30 " />
          </div>
          <div className=" relative mb-5">
            <input
              type="email"
              name="email"
              value={fromData.email}
              placeholder="Valid email"
              className="shadow appearance-none border  rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <IoIosMail className=" absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>
          <div className=" relative mb-5">
            <input
              type="phone"
              name="phone"
              value={fromData.phone}
              placeholder=" Phone number"
              className="shadow appearance-none border  rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // onInput={(e) => {
              //   e.target.value = e.target.value.replace(/[^0-9]/g, "");
              // }}
            />
            <IoIosPhonePortrait className=" absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>
          <div className=" relative mb-5">
            <input
              type="password"
              name="password"
              value={fromData.password}
              placeholder=" Password"
              className="shadow appearance-none border  rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FaLock className=" absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>
          <div className=" relative mb-5">
            <input
              type="password"
              name="repassword"
              value={fromData.repassword}
              placeholder=" Re Password "
              className="shadow appearance-none border  rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FaLock className=" absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-ga-primary
           hover:bg-ga-secondary text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-md text-2xl  h-16"
            >
              Register
            </button>
          </div>
        </from>
      </div>
    </>
  );
}

export default Register;
