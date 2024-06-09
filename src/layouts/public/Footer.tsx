import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoArrowForwardOutline, IoCall, IoMail } from "react-icons/io5";
import { MdLocationOn, MdLocationPin, MdMail } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const quickLinks = [
    {
      title: "Who Are We",
    },
    {
      title: "Our History",
    },
    {
      title: "About Us",
    },
    {
      title: "Manufacturing",
    },
    {
      title: "Investor Relation",
    },
    {
      title: "Projects",
    },
  ];
  return (
    <div className="w-full main-container flex flex-col gap-6 pb-4">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
        <div className="flex flex-col gap-4">
          <img src="/logo.png" alt="" className="h-7 w-fit" />
          <div className="flex gap-2 items-center">
            <MdMail className="text-primary" />
            <span>Help@Frybix.Com</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhone className="text-primary" />
            <span>+1234 456 678 89</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Links</h2>
          <div className="flex flex-col gap-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Bookings</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Legal</h2>
          <div className="flex flex-col gap-2">
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Product</h2>
          <div className="flex flex-col gap-2">
            <p>Take Tour</p>
            <p>Live Chat</p>
            <p>Reviews</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Newsletter</h2>
          <div className="flex flex-col gap-2">
            <p>Stay Up To Date</p>
            <div className="flex justify-between items-center bg-white rounded-md shadow-md p-2 w-full">
              <input
                className=" outline-none text-sm w-1/2"
                type="text"
                placeholder="EMAIL*"
                name=""
              />
              <div className="bg-black py-2 px-4 text-white rounded text-sm">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <hr className="" />
      </div>
      <div className="flex justify-center font-semibold text-sm">
        Copyright 2022 uifry.com all rights reserved
      </div>
    </div>
  );
};

export default Footer;
