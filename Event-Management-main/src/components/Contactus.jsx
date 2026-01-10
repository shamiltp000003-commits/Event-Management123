import React, { useState } from "react";
import Aboutimg2 from "../assets/abutimg2.jpg"
import { PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Contactus = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
    formData.append("to_email", "hibathengilan@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div className="w-full flex flex-col mb-5 mt-8 overflow-x-hidden">

      {/* Hero Section */}
      {/* <section
        className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-start px-6"
        style={{ backgroundImage: `url(${Aboutimg2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <h1 className="relative text-white text-[36px] md:text-[50px] font-mont w-full md:w-7xl px-2 md:px-3 z-10 font-lexend">
          Contact With Us
        </h1>
      </section> */}

      {/* Content Wrapper */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row mx-auto p-4 gap-6">

        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-2/5 p-2 pt-6">

          <h1 className="text-[28px] md:text-[32px] font-bold font-lexend text-[#082A5E]">
            Keep In Touch With Us
          </h1>

          <p className="font-hind text-[14px] text-[#39557E]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ditetur vitae numquam ullam obcaecati?
          </p>

          {/* Phone */}
          <div className="flex flex-row gap-4">
            <div className="my-auto border border-gray-300 rounded-md p-3">
              <PiPhone className="text-[28px] md:text-[32px] text-blue-900" />
            </div>

            <div className="flex flex-col">
              <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
                Call us on:
              </p>
              <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
                Kochi ( H Q ): 91 8086 651 651 <br /> Trivandrum: +91 6235651651
                <br />
                Calicut: +91 8086 531 531, 0495 - 3573001 <br /> Thrissur: 7025651651
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-row gap-4">
            <div className="my-auto border border-gray-300 rounded-md p-3">
              <MdOutlineMail className="text-[28px] md:text-[32px] text-blue-900" />
            </div>

            <div className="flex flex-col">
              <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
                Email us at:
              </p>
              <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
                Enquiry: contact@wedcraft.com <br />
                Placement Cell: hr@wedcraft.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-row gap-4">
            <div className="my-auto border border-gray-300 rounded-md p-3">
              <IoLocationOutline className="text-[28px] md:text-[32px] text-blue-900" />
            </div>

            <div className="flex flex-col">
              <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
                Locate us on (H Q):
              </p>
              <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
                WedCraft Easy Weddings <br />
                Calicut Road, kondotty  <br />
                Near:Preethi Silks
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-row gap-4">
            <div className="my-auto border border-gray-300 rounded-md p-3">
              <FaWhatsapp className="text-[28px] md:text-[32px] text-blue-900" />
            </div>

            <div className="flex flex-col">
              <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
                Connect Us on:
              </p>
              <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
                Malappuram ( H Q ): 91 8086 651 651 <br /> Trivandrum: +91 6235651651
                <br />
                Calicut: +91 8086 531 531, 0495 - 3573001 <br /> Thrissur: 7025651651
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-3/5 mx-auto shadow rounded-lg p-6 md:p-12 bg-slate-100 border border-gray-300 mt-6 md:mt-12">

          <h2 className="text-2xl font-semibold mb-4 text-[#082A5E]">Get in Touch</h2>

          <div className="h-0.5 w-16 bg-purple-600 mb-6"></div>

          <form onSubmit={onSubmit} className="space-y-6">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                required
                className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                required
                className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="city"
                placeholder="City *"
                required
                className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Dropdown */}
            <select
              name="course"
              required
              className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Choose an Event</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Photography">Photography</option>
              <option value="Catering">Catering</option>
              <option value="Decorations">Decorations</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              SEND MESSAGE
            </button>

            <p className="text-sm mt-2">{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;