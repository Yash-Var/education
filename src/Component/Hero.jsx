import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  console.log(userName);
  const handleLogout = () => {
    // Remove the token and user name from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    // Redirect to the login page
    window.location.href = "http://localhost:3000/login";
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
              Bharat Vidya
            </h1>
            <p className="mb-8 text-2xl leading-relaxed">
              Our vision is to create a comprehensive educational platform named
              “Bharat Vidya” that leverages technology to improve the quality of
              education in rural areas.
            </p>
            {token ? (
              <div className="flex items-center">
                <p className="text-grey-900 text-4xl mr-4">Hello, {userName}</p>
              </div>
            ) : (
              // Render Login and Register buttons if token doesn't exist
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link to="/login">Login</Link>
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  <Link to="/register">Register</Link>
                </button>
              </div>
            )}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://file-uploads.teachablecdn.com/a716a5396fb0464f92ce88707de28ba1/2fa0457a06104a2897e1ef527979e8fe"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
