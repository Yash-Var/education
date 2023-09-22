import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

function About() {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
        <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We are a team of passionate individuals dedicated to providing high-quality services and products.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ante id facilisis. In interdum mauris eget justo congue, at volutpat urna vehicula. Sed ac sem id nulla vestibulum laoreet. 
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Vivamus nec nisl varius, volutpat tellus eget, commodo lectus. Praesent ut ante vel justo lacinia facilisis eu sit amet felis. Vivamus rhoncus nunc ut leo tristique, at eleifend arcu aliquam.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Curabitur vel odio in erat ultricies consectetur. Maecenas eu turpis quis justo cursus pharetra vel ac dolor. Fusce ut felis sed elit facilisis blandit vel id est.
          </p>
        </div>
      </div>
    </section>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default About;
