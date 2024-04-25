import profileImg from "../assets/Balavasan-bgDesign.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full pt-[30%] w-full bg-gradient-to-b 
      from-black via-black to-gray-800 md:pt-[10%]"
    >
      <div
        className="max-w-screen- mx-auto flex flex-col
      items-center justify-center h-full px-4 sm:flex-row sm:justify-evenly"
      >
        <div className="flex flex-col justify-center h-full  max-w-lg px-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white ">
            Hi, I'm Balavasan
          </h2>
          <h3 className="text-2xl font-semibold text-subBlue md:text-3xl">
            React Developer & UI Designer
          </h3>
          <p className="text-gray-500 py-4 ">
            I'm an aspiring React developer and UI designer with a strong
            passion for creating exceptional user experiences. I love to work on
            Web application using Technologies like React, Tailwind, Bootstrap
            and Figma.
          </p>
          <div className="pt-6">
            <Link
              to="portfolio"
              smooth
              duration={300}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 
            rounded-xl w-1/4 flex items-center mb-6 cursor-pointer group"
            >
              Portfolio
              <span className="ml-2 duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <img
            src={profileImg}
            className="rounded-2xl mx-auto  w-2/3 md:w-80"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
