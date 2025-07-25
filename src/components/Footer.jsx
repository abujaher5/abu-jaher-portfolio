import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside
        className="grid-flow-col items-center
       place-self-center
      justify-self-center
      md:place-self-start md:justify-self-start
      "
      >
        <div>
          <p className=" text-center md:text-start lg:text-start text-white">
            Abu Jaher
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </aside>

      <nav
        className="grid-flow-col gap-4
      place-self-center
      justify-self-center
      md:place-self-end md:justify-self-end"
      >
        <a href="https://www.linkedin.com/in/abu-jaher5">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/abujaher5">
          <FaGithub size={20} />
        </a>
        <a href="https://x.com/abujaher512">
          <FaXTwitter size={20} />
          {/* <a href="https://www.facebook.com/rasel.bin.rishat">
            <FaFacebook size={20} />
          </a> */}
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
