import { useRef } from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Success");
          form.current.reset();

          Swal.fire({
            title: "Message Sent Successfully",
            text: "Thanks for contacting",
            icon: "success",
          });
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
  };
  return (
    <div>
      <section id="contact" className="py-6 bg-[#262b40]">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold italic">Get in touch</h1>
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
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <h1 className="text-4xl font-bold">Let’s work together!</h1>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                required
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="border w-full rounded-md shadow-sm p-1 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                required
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                className="border w-full rounded-md shadow-sm p-1 "
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                required
                rows="3"
                placeholder="Type Message"
                className="border w-full rounded-md shadow-sm p-1 "
              ></textarea>
            </label>
            <input
              type="submit"
              value={"Send Message"}
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
