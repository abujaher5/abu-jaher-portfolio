import { BiLogoNetlify } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-center mt-2 bg-[#262b40]">
        <div className="flex flex-col space-y-2 items-center">
          <h2 className="text-center text-3xl font-bold pt-5 italic">
            My Technical Skills
          </h2>
          <p className="text-center font-semibold w-1/2">
            Versatile proficiency in HTML, CSS, JavaScript, React, Node.js,
            Express.js, and MongoDB for dynamic web application development.
          </p>
        </div>
        {/*  skills div container */}

        <div className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {/* // Frontend skills  */}
          <div className="border border-amber-50 rounded-md shadow-lg bg-[#262b40] my-3">
            <h2 className="text-xl italic rounded-xl border p-2 m-2">
              Frontend Tools
            </h2>
            <div className=" px-3 grid grid-cols-2 gap-2 mb-2 md:mb-6">
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md mt-6 h-18  p-3 space-y-3 ">
                <div className="flex  flex-col items-center gap-3">
                  <FaHtml5 size={20} color="#db3f23" />
                  <h1 className="text-white  font-medium text-xs">HTML</h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md    mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <IoLogoCss3 size={20} color="#1661ab" />
                  <h1 className="text-white  font-medium text-xs">CSS</h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md   mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <IoLogoJavascript size={20} color="#de9426" />
                  <h1 className="text-white  font-medium text-xs">
                    JavaScript
                  </h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md   mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <SiTailwindcss size={20} color="#34bdf7" />
                  <h1 className="text-white  font-medium text-xs">
                    Tailwind CSS
                  </h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md  mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <RiReactjsLine size={20} color="#61dafb" />
                  <h1 className="text-white  font-medium text-xs">React</h1>
                </div>
              </div>
            </div>
          </div>

          {/* // Deploy and Authentication  */}
          <div className="border border-amber-50 rounded-md shadow-lg bg-[#262b40] my-3">
            <h2 className="text-xl italic rounded-xl border p-2 m-2">
              Deploy And Authentication Tools
            </h2>
            <div className=" px-3 grid grid-cols-2 gap-2 mb-2 md:mb-6">
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md mt-6 h-18  p-3 space-y-3 ">
                <div className="flex flex-col items-center gap-3">
                  <BiLogoNetlify size={20} color="#ffffff" />
                  <h1 className="text-white  font-medium text-xs">Netlify</h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md    mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <IoLogoVercel size={20} color="#ffffff" />
                  <h1 className="text-white  font-medium text-xs">Vercel</h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md   mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <IoLogoFirebase size={20} color="#ffc300" />
                  <h1 className="text-white  font-medium text-xs">Firebase</h1>
                </div>
              </div>
            </div>
          </div>
          {/* // Backend and Database  */}
          <div className="border border-amber-50 rounded-md shadow-lg bg-[#262b40] my-3">
            <h2 className="text-xl italic rounded-xl border p-2 m-2">
              Backend And Database Tools
            </h2>
            <div className=" px-3 grid grid-cols-2 gap-2 mb-2 md:mb-6">
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md   mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <FaNodeJs size={20} color="#6ea45e" />
                  <h1 className="text-white  font-medium text-xs">Node.js</h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md   mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <SiExpress size={20} color="#6ea45e" />
                  <h1 className="text-white  font-medium text-xs">
                    Express.js
                  </h1>
                </div>
              </div>
              <div className="border border-[#272E2C] bg-[#191e36] rounded-md  mobile:w-24 desktop:  mt-6 h-18  p-3 space-y-3">
                <div className="flex flex-col items-center gap-3">
                  <DiMongodb size={20} color="#17ad55" />
                  <h1 className="text-white  font-medium text-xs">MongoDb</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
