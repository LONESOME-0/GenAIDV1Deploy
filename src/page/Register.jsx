import React, { useState, useEffect } from 'react';
import Nav from '../components/Navbar/Nav';
import logo from '/public/img/logo-genaid.png';
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register =()=> {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    repassword: '',
  });
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    console.log(formData);
    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
       
      });
      if (response.data) {
        // setToken(response.data.token);
        // localStorage.setItem("token", response.data.token)
        console.log(response.data);
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
  })
  const validateForm = (data) => {
    let errors = {};
    if (!data.fullname) {
      errors.fullname = 'Full name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if (!data.phone) {
      errors.phone = 'Phone number is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    if (!data.repassword) {
      errors.repassword = 'Confirm password is required';
    }
    if (data.password !== data.repassword) {
      errors.repassword = 'Passwords do not match';
    }
    return errors;
  };




  return (
    <>
      <Nav back title="" />
      <div className="flex flex-col items-center justify-center min-h-screen lg:flex lg:flex-row lg:gap-1 lg:my-40">
        <section className="flex justify-center items-center my-5">
          <img src={logo} alt="logo" className="w-[60%] lg:w-[80%]" />
        </section>

        <form
          className="bg-white p-6 shadow-xl w-[80%] max-w-sm rounded-3xl lg:mr-24"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-1 text-3xl font-bold">Lets Register Account</h1>
          <p className="mb-1 text-2xl font-medium text-center">
            Hello User, you have a greatful journey
          </p>
          <h1 className="m-7 font-bold text-2xl ml-2">Register</h1>

          <div className="relative mb-5">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              placeholder="Fullname"
              className="shadow appearance-none border rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
            {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname}</p>}
      
            <FaUser className="absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>

          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
             {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <IoIosMail className="absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>

          <div className="relative mb-5">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              className="shadow appearance-none border rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
             {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            <IoIosPhonePortrait className="absolute right-3 bottom-2 text-2xl opacity-30"
            />
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <FaLock className="absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              name="repassword"
              value={formData.repassword}
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full pr-10 py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
           {errors.repassword && <p style={{ color: 'red' }}>{errors.repassword}</p>}
            <FaLock className="absolute right-3 bottom-2 text-2xl opacity-30" />
          </div>

          <button
            type="submit"
            className="w-full bg-ga-primary
           hover:bg-ga-secondary text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-md text-2xl  h-16"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;