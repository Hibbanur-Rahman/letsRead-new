import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroPng from "../assets/images/letsread.png";
import HeroImgMobile from "../assets/images/hero-img-mobile.png";
// import Enquire from "../pages/Enquire";
import EnquirePng from "../assets/images/Enquire.png";
import { Dialog } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { toggleModal } from "../redux/modalSlice";
import { openEnquireModal } from "../redux/enquireModalSlice";
import toast from "react-hot-toast";
import axios from "axios";

const HeroSection = () => {
  const dispatch = useDispatch();
  const enquireModalOpen = useSelector((state) => state.enquireModal?.open);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [childName, setChildName] = useState("");
  const [loading, setLoading] = useState(false);

  // handle the enquiry message
  const handleEnquiryMessage = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("state", state);
      formData.append("childName", childName);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwiSCz5wYEpeXjc7aAGkKvAPNJ6RUfvrec2cAZtoNDkHtmojmwJmxYvEA30xXmTwVYY/exec",
        formData
      );
      if (response.status === 200) {
        setLoading(false);
        toast.success("Your message has been sent successfully");
        setChildName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setState("");
        setFullName("");
      }
    } catch (error) {
      setLoading(false);
      console.log("error in sending enquiry:", error);
      toast.error(error?.response?.message?.data || "Failed to Send Message");
    }
  };
  const handleModal = () => {
    dispatch(openEnquireModal(true));
  };
  return (
    <div className="w-full flex justify-center items-center flex-col relative md:mt-0 ">
      <img src={HeroPng} alt="img" className="w-full md:flex hidden" />
      <img src={HeroImgMobile} alt="img" className="w-full md:hidden" />

      <div className="absolute md:px-0 px-4 md:top-[260px] top-[50px] md:left-[200px]">
        <h1 className="text-white md:text-5xl text-3xl font-bold">
          We Prepare To Ignite{" "}
        </h1>
        <h1 className="text-white md:text-5xl text-3xl font-bold md:mt-4">
          The Joy of <span className="text-yellow ">Reading</span>
        </h1>
        <p className="text-white md:text-lg text-sm md:w-7/12 mt-5">
          Kinesthetic reading kits offer young children the tools and means to
          ignite a passion for lifelong learning.
        </p>
        <p className="text-white md:text-2xl text-sm md:w-7/12 mt-5">
          100+ Schools ... 10000+ Teachers ... 50000+ Students{" "}
        </p>
        <button
          onClick={() => dispatch(openEnquireModal(true))}
          className="bg-yellow px-4 py-2 mt-4  rounded-lg font-bold"
        >
          Enquire Now
        </button>
      </div>
      <Dialog
        open={enquireModalOpen}
        handler={handleModal}
        className="flex justify-center overflow-scroll content-center absolute rounded-2xl w-full h-full "
      >
        <div className="w-full flex flex-col items-center md:h-[880px] h-max  pb-[0]  bg-white relative  rounded-2xl overflow-hidden shadow-2xl">
          <button
            className="absolute  right-2 top-1 bg-white rounded-full shadow-xl"
            onClick={() => dispatch(openEnquireModal(false))}
          >
            <RxCross2 className="text-3xl text-pink font-bold" />
          </button>
          <img
            src={EnquirePng}
            alt="aboutimg"
            className="md:h-[300px] h-[150px] w-full object-cover object-center overflow-hidden  "
          />
          <div className="w-11/12 py-4 md:px-0 px-3   bg-pink rounded-3xl md:absolute relative md:mt-0 mt-[-30px] md:top-[250px] md:mx-6">
           
            <p className="text-center text-white md:w-9/12 w-full md:text-base text-xs mx-auto">
              Please Complete The form below, and we will get back to you within
              24 hours.
            </p>
          </div>
          <form
            className="w-full  md:px-0 px-3 flex flex-col gap-[14px] justify-center items-center md:pt-[50px] pt-[20px] "
            onSubmit={(e) => handleEnquiryMessage(e)}
          >
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Enter your name"

              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Your Email"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter Your Mobile Number"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="Enter Your State Name"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              type="text"
              placeholder="Enter Your Child Name"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="4"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black  resize-none"
              placeholder="Enter Your Message"
            ></textarea>
            {loading ? (
              <button
                className="bg-pink text-white md:w-8/12 w-full py-2 mt-4  rounded-2xl font-bold cursor-not-allowed"
                disabled
              >
                sending ...
              </button>
            ) : (
              <button
                className="bg-pink text-white md:w-8/12 w-full py-2 mt-4  rounded-2xl font-bold"
                onClick={(e) => handleEnquiryMessage(e)}
              >
                Enquire Now
              </button>
            )}
          </form>
        </div>
      </Dialog>
    </div>
  );
};
export default HeroSection;
