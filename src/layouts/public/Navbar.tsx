/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCall, IoMail, IoSearchOutline } from "react-icons/io5";
import {
  MdLocationPin,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState(false);
  const [searchText, setSearchText] = useState("");

  const router = useRouter();
  const { asPath } = router;
  const navARR = [
    { title: "Home", link: "/", isSubmenu: false },
    { title: "About Us", link: "/about-us", isSubmenu: false },
    { title: "Pricing", link: "/products", isSubmenu: false },
    {
      title: "Features",
      link: "/features",
      isSubmenu: false,
    },
  ];
  const toggleDropdown = (title: any) => {
    if (isOpen === title) {
      setIsOpen(null); // Close if already open
    } else {
      setIsOpen(title);
    }
    // setIsOpen(!isOpen);
  };

  const handleSearchInput = (e: any) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) {
      setSearchProduct(true);
    } else {
      setSearchProduct(false);
    }
  };

  const filteredProducts = navARR.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <section className="sticky top-0 z-[999] hidden bg-white lg:block ">
        <div className="main-container flex justify-between items-center py-3 ">
          <div className="flex gap-20 items-center">
            <Link href="/">
              <img src="/logo.png" alt="" className=" w-fit h-7" />
            </Link>
            <div className="flex gap-8 items-center">
              {navARR.map((item, i) => (
                <div key={i} className="relative group hover:text-primary  ">
                  <Link href={item?.link} rel="noopener noreferrer">
                    <div className="flex items-center gap-1 font-bold text-base ">
                      <div
                        onClick={() => toggleDropdown(item?.title)}
                        className={` ${
                          item?.link === asPath ? "text-primary " : ""
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-black  rounded-sm text-white py-3 px-8 cursor-pointer">
              <p className="text-sm">Download</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------- Responsive Navbar----------- */}
      <section className="sticky top-0 z-[999] block bg-white lg:hidden">
        <ResponsiveNavbar />
      </section>
    </>
  );
};

export default Navbar;
