import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-6 bg-blue-950">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Let's Talk For Your Next Project</p>
            <div className="space-y-4">
              <p className="flex items-center hover:text-green-500">
                <FaLocationDot className="w-5 h-5 mr-2 sm:mr-6" />

                <span>Chattogram,Bangledesh</span>
              </p>
              <p className="flex items-center hover:text-green-500">
                <FaPhone className="w-5 h-5 mr-2 sm:mr-6" />
                <span>+8801863024061</span>
              </p>
              <p className="flex items-center hover:text-green-500">
                <MdEmail className="w-5 h-5 mr-2 sm:mr-6" />
                <span>abujaher5120@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <h1 className="text-4xl font-bold">Let’s work together!</h1>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border w-full rounded-md shadow-sm p-1 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border w-full rounded-md shadow-sm p-1 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                placeholder="Type Message"
                className="border w-full rounded-md shadow-sm p-1 "
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
