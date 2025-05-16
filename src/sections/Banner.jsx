import { BsDownload } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <section
        id="banner"
        className="bg-[#191f36] p-4 flex flex-col items-center md:items-start space-y-2 text-center md:text-start "
      >
        <h3 className="text-xl  font-semibold">Hi Myself</h3>
        <h2 className="text-3xl font-bold">Abu Jaher</h2>
        <h3 className="text-xl font-semibold">I am a Web Developer</h3>
        <p className="w-2/3">
          I am expertise in creating dynamic and responsive web applications.My
          proficiency in React allows me to build efficient and scalable
          front-end solutions.I specialize in delivering user-friendly
          interfaces and seamless experiences through modern web technologies.
        </p>
        <div className="flex gap-3 py-3 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
          <FaFacebook />
        </div>
        <button className="flex justify-center items-center gap-2 btn btn-outline text-2xl">
          Resume
          <BsDownload />
        </button>
      </section>
    </div>
  );
};

export default Banner;
