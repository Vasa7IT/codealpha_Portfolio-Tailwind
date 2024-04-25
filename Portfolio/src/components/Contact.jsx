import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white
     ">
      <div className="flex flex-col pt-4 justify-center h-screen mx-auto 
       max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-500">Contact</p>
          <p className="pt-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center " data-aos="fade-down">
          <form method="POST" action="https://getform.io/f/pbygwvmb" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="Name"
              placeholder="Enter your Name"
              className=" rounded-md border-2 p-2 bg-transparent text-white
              focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              required
              placeholder="Enter your Email"
              className="my-4 rounded-md border-2 p-2 bg-transparent text-white
              focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="10"
              className="rounded-md border-2 p-2 bg-transparent text-white
               focus:outline-none"
            ></textarea>
            <button type="submit"
              className="text-white bg-gradient-to-b from-cyan-500
                to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                 rounded-md hover:scale-105 duration-300"
                 data-aos="fade-up"
                 data-aos-delay="150"
            >Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
