import { useParams } from "react-router-dom";
import project1 from "../assets/gadget-repair-20009.web.app_.png";
import project2 from "../assets/famous-diagnostic-center.web.app.png";
import project3 from "../assets/stay-vista-ad05e.web.app_.png";

const projectData = {
  1: {
    title: "FixGadget",
    description:
      "Fix Gadget is a gadget repairing & gadget parts seller Web Application that allows users to repair their damage gadget and also buy new product from here. Customers can browse available service options, select service based on their preferences, and schedule delivery. Service providers can manage services, respond to customer booked services and new products orders, and track deliveries..",
    image: project1,
  },
  2: {
    title: "Diagnostic Center",
    description:
      "This is a simple MERN stack application for a diagnostic center. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.",
    image: project2,
  },
  3: {
    title: "Stay Vista",
    description:
      "Stay Vista is a website where guests can book rooms for staying, and hosts can add their rooms to rent. Admins manage everything to keep the website safe and running smoothly.",
    image: project3,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    <div className="text-white p-10 bg-[#111111] flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="mb-6 rounded w-full "
      />
      <p className="text-lg">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
