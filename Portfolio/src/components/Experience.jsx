import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import pythonLogo from "../assets/python-logo.png";
import figmaLogo from "../assets/figma-logo.png";
import webflowLogo from "../assets/webflow-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);

  const skills = [
    { id: 1, title: "Html", src: htmlLogo, style: "shadow-orange-500" },
    { id: 2, title: "Css", src: cssLogo, style: "shadow-blue-500" },
    { id: 3, title: "Js", src: jsLogo, style: "shadow-yellow-500" },
    { id: 4, title: "react", src: reactLogo, style: "shadow-blue-500" },
    { id: 5, title: "Python", src: pythonLogo, style: "shadow-white" },
    { id: 6, title: "Figma", src: figmaLogo, style: "shadow-pink-500" },
    { id: 7, title: "Webflow", src: webflowLogo, style: "shadow-sky-500" },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b
     from-gray-800 to-black w-full h-full pt-20 p-4"
    >
      <div
        className=" max-w-screen-lg w-full h-full flex flex-col
      mx-auto text-white justify-center"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-gray-600">
            Experience
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
        py-8 px-12 sm:px-0"
        >
          {skills.map(({ id, title, src, style }) => (
            <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 
          py-2 rounded-lg ${style}`}
          data-aos="fade-down"
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
