// const Projects = () => {
//   return <div></div>;
// };

// export default Projects;

import { Link } from "react-router-dom";

import project1 from "../assets/gadget-repair-20009.web.app_.png";
import project2 from "../assets/famous-diagnostic-center.web.app.png";
import project3 from "../assets/stay-vista-ad05e.web.app_.png";

import { FaEye, FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    image: project1,
    live: "https://gadget-repair-20009.web.app/",
    client: "https://github.com/abujaher5/b9a11-client-side",
    server: "https://github.com/abujaher5/b9a11-server-side",
    title: "FixGadget",
    description:
      "Fix Gadget is a gadget repairing & gadget parts seller Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries.",
  },
  {
    id: 2,
    image: project2,
    live: "https://famous-diagnostic-center.web.app/",
    client: "https://github.com/abujaher5/Assignment-12-client",
    server: "https://github.com/abujaher5/Assignment-12-server",
    title: "Diagnostic Center",
    description:
      "This is a simple MERN stack application for a diagnostic center. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.",
  },
  {
    id: 3,
    image: project3,
    live: "https://stay-vista-ad05e.web.app/",
    client: "https://github.com/abujaher5/stay-vista/tree/main/client",
    server: "https://github.com/abujaher5/stay-vista/tree/main/server",
    title: "Stay Vista",
    description:
      "Stay Vista is a website where guests can book rooms for staying, and hosts can add their rooms to rent. Admins manage everything to keep the website safe and running smoothly.",
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-[#262b40] text-white mt-3">
      <h3 className="text-center text-3xl font-bold pt-5 italic">
        My Projects
      </h3>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:py-10 md:py-14 py-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg transition-transform 
              hover:scale-[1.01] "
            >
              <Link to={`/project-details/${project.id}`}>
                <div
                  style={{
                    background: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                  className="h-[260px] md:h-[300px] w-full transition-transform translate-y-2
                  duration-300 hover:scale-105"
                />
              </Link>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a target="_blank" href={project.live}>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#C9F31D] text-black rounded-full hover:bg-lime-400 transition font-semibold shadow">
                      <FaEye /> Live
                    </button>
                  </a>
                  <a target="_blank" href={project.client}>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#C9F31D] text-[#C9F31D] rounded-full hover:bg-[#C9F31D] hover:text-black transition font-semibold shadow">
                      <FaGithub /> Client
                    </button>
                  </a>
                  <a target="_blank" href={project.server}>
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#C9F31D] text-black rounded-full hover:bg-lime-400 transition font-semibold shadow">
                      <FaGithub /> Server
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
