import bg from "../assets/protfoliobg.png";

const About = () => {
  return (
    <div id="about" className="bg-[#262b40] text-center md:text-start">
      <h2 className="text-center text-3xl font-bold pt-5 italic">About Me</h2>
      <section className="flex flex-col items-center  md:flex-row">
        <div className=" p-4 m-4">
          <img className="bg-cover h-1/2" src={bg} alt="image" />
        </div>
        <div className="flex flex-col items-center md:items-start flex-1 space-y-4">
          <h3 className="text-xl font-semibold">Hi Myself</h3>
          <h2 className="text-3xl font-bold">Abu Jaher</h2>
          <h3 className="text-xl font-semibold">I am a Web Developer</h3>
          <p className="w-2/3">
            I am expertise in creating dynamic and responsive web
            applications.My proficiency in React allows me to build efficient
            and scalable front-end solutions.I specialize in delivering
            user-friendly interfaces and seamless experiences through modern web
            technologies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
