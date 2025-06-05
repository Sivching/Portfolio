import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" className=" pt-44 ">
      <div className=" w-[90%] xl:w-[80%]  mx-auto ">
        <h1
          data-aos="fade-right"
          data-aos-delay="0"
          className="text-4xl lg:text-5xl font-bold text-blue-400 border-b-4 lg:border-b-8 w-[130px] lg:w-[174px] border-blue-400 "
        >
          Contact
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-3xl  text-blue-200 xl:text-4xl font-bold text-center mt-10 lg:mt-16"
        >
          Our Information
        </h1>
        <div className=" mx-auto my-20 text-center text-gray-200 px-20 mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-3  ">
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="flex justify-center "
            >
              <FaLocationDot className="w-16 h-16 xl:w-20 xl:h-20 p-4 text-white rounded-full  bg-sky-800" />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-xl mt-5 "
            >
              Phum Anglong Kngan, Sangkat Khmounh, Khan Sen Sok, Phnom Penh,
              Cambodia.
            </p>
          </div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="flex justify-center "
            >
              <IoMdMail className="w-16 h-16 xl:w-20 xl:h-20  p-4 text-white rounded-full bg-sky-800" />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5  font-bold text-xl  "
            >
              yisivching@gmail.com
            </p>
          </div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="flex justify-center "
            >
              <IoCallSharp className="w-16 h-16 xl:w-20 xl:h-20 p-4  text-white rounded-full bg-sky-800" />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5 text-xl  font-bold "
            >
              Phone Number: (+855) 069 859 846
            </p>
          </div>
        </div>
      </div>
      <form action="https://getform.io/f/rbeqrmkb" method="POST">
        <div className="mt-10 lg:mt-16 mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-3xl text-blue-200  xl:text-4xl font-bold text-center"
          >
            Submit Your Information
          </h1>
          <div className="w-[90%] xl:w-[80%] mx-auto lg:grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <div className="mt-10">
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="text"
                placeholder="Name"
                name="name"
                className="w-[100%] py-2 xl:py-3 xl:pr-60  lg:py-3 lg:pr-60 px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
            <div className="mt-5 md:mt-7">
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="text"
                placeholder="Phone"
                name="phone"
                className="w-[100%] py-2 lg:mt-3  xl:py-3 xl:pr-60 lg:py-3 lg:pr-60  px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
            <div className="mt-5 md:mt-7">
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="email"
                placeholder="Email"
                name="email"
                className="w-[100%] py-2 xl:py-3 xl:pr-60 lg:py-3 lg:pr-60  xl:mt-3 px-4 text-sm md:text-lg rounded-lg border border-sky-400"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-7 flex justify-center ">
            <textarea
              data-aos="fade-up"
              data-aos-delay="100"
              placeholder="Description"
              name="description"
              className="w-[90%] xl:w-[80%] pb-60 px-4  py-2  text-sm md:text-lg rounded-lg border border-sky-400"
            />
          </div>
          <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between">
            <div></div>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              type="submit"
              className="mt-7 py-3 px-5 font-bold md:py-4 md:px-7 text-md rounded-md bg-blue-900 text-white  hover:bg-blue-700 transition-all ease-in-out duration-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
