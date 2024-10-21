import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import LetsReadImg from "../assets/images/image 2.png";
import { BiSolidUserDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiHome } from "react-icons/hi2";
import { BsInfoCircle } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openEnquireModal } from "../redux/enquireModalSlice";

const Header = () => {
  const dispatch=useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <nav className="bg-white p-2  flex justify-center items-center w-full md:relative fixed md:top-0 top-[0px] z-[100] md:shadow-none shadow-lg">
      <div className="flex justify-between items-center w-full md:px-6 ">
        <img
          src={LetsReadImg}
          alt="img"
          className="md:w-[200px] md:h-[50px] w-[100px] h-[30px] cursor-pointer"
          onClick={()=>navigate('/')}
        />
        <nav className=" md:flex hidden gap-6 items-center">
          <NavLink
            to="/"
            className={`text-lg font-bold ${
              location.pathname === "/" ? "text-pink underline" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`text-lg font-bold ${
              location.pathname === "/about" ? "text-pink underline" : ""
            }`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            className={`text-lg font-bold ${
              location.pathname === "/products" ? "text-pink underline" : ""
            }`}
          >
            Products
          </NavLink>
          <NavLink
            to="/programs"
            className={`text-lg font-bold ${
              location.pathname === "/programs" ? "text-pink underline" : ""
            }`}
          >
            Programs
          </NavLink>
          <NavLink
            to="/resources"
            className={`text-lg font-bold ${
              location.pathname === "/resources" ? "text-pink underline" : ""
            }`}
          >
            Resources
          </NavLink>
          <NavLink
            to="/faq"
            className={`text-lg font-bold ${
              location.pathname === "/faq" ? "text-pink underline" : ""
            }`}
          >
            FAQ
          </NavLink>
          <button
            className=" px-4 py-2 ml-12  mx-6 rounded-lg font-bold"
            style={{
              background:
                "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
            }}
            onClick={()=>{
              navigate('/')
              dispatch(openEnquireModal(true))}}
          >
            Enquire Now
          </button>
        </nav>
        <div className="md:hidden flex gap-[10px]">
          <div className="rounded-full cursor-pointer shadow-md flex justify-center items-center bg-black p-1">
            <BiSolidUserDetail className="text-3xl  text-yellow" />
          </div>
          <div className="rounded-full cursor-pointer shadow-md flex justify-center items-center bg-[#7E57C2] p-1 px-2">
            <FiPhoneCall className="text-2xl  text-white" onClick={()=>dispatch(openEnquireModal(true))} />
          </div>
          <div
            className="rounded-full cursor-pointer shadow-md flex justify-center items-center bg-pink p-1  px-2"
            onClick={toggleDrawer(true)}
          >
            <IoMenu className="text-2xl  text-white" />
          </div>

          <Drawer placement="right" open={open} onClose={toggleDrawer(false)}>
            <div className="w-[290px] min-h-[100vh] bg-white flex flex-col relative">
              <div className="w-full flex justify-between item-center px-2 py-3 shadow-lg">
                <img
                  src={LetsReadImg}
                  alt="img"
                  className=" w-[120px] h-[40px]"
                  onClick={() => navigate("/")}
                />
                <div className="flex gap-[10px] items-center">
                  <div className="rounded-full cursor-pointer shadow-md flex justify-center items-center bg-black p-1">
                    <BiSolidUserDetail className="text-3xl  text-yellow" />
                  </div>
                  <div
                    className="flex items-center justify-center rounded-lg shadow-lg p-1"
                    onClick={toggleDrawer(false)}
                  >
                    <RxCross2 className="text-4xl  text-pink" />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col px-4">
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/")}
                  >
                    <HiHome className="text-3xl" />
                    <p className="text-xl">Home</p>
                  </div>
                </div>
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/about"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/about")}
                  >
                    <BsInfoCircle className="text-3xl" />
                    <p className="text-xl">About Us</p>
                  </div>
                </div>
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/products"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/products")}
                  >
                    <IoLibraryOutline className="text-3xl" />
                    <p className="text-xl">Products</p>
                  </div>
                </div>
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/programs"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/programs")}
                  >
                    <MdLibraryAddCheck className="text-3xl" />
                    <p className="text-xl">Programs</p>
                  </div>
                </div>
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/resources"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/resources")}
                  >
                    <HiOutlineSquaresPlus className="text-3xl" />
                    <p className="text-xl">Resources</p>
                  </div>
                </div>
                <div className="w-full py-3 border-b-[1px] border-[#929292]">
                  <div
                    className={`w-full flex items-center px-3 py-2 gap-[10px] rounded-2xl ${
                      location.pathname === "/faq"
                        ? "bg-[#7E57C2] text-white shadow-lg"
                        : "bg-white"
                    } `}
                    onClick={() => navigate("/faq")}
                  >
                    <MdOutlineQuestionAnswer className="text-3xl" />
                    <p className="text-xl">Faq</p>
                  </div>
                </div>
              </div>

              <div className="w-full relative bottom-0 flex items-center justify-center">
                <div className="custom-shape-divider-bottom-1727976807  mt-5 left-0 w-full overflow-hidden rotate-180">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block  h-[120px]"
                    style={{ width: "calc(100% + 1.3px)" }}
                  >
                    <path
                      d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                      className="shape-fill  fill-[#7E57C2]"
                    ></path>
                  </svg>
                </div>
                <div className="absolute bottom-0">
                  <div className="flex items-center gap-[20px]">
                    <FiPhoneCall className="text-white text-2xl" />
                    <Link className="text-white text-lg">
                      Phone: +918520824374
                    </Link>
                  </div>
                  <div className="flex items-center gap-[20px] my-1">
                    <FaEnvelope className="text-white text-2xl" />
                    <Link className="text-white text-lg">
                      sales@letsreadindia.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
export default Header;
