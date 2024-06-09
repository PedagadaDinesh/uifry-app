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
            <a
              href="#_"
              className="rounded px-5 py-2.5 overflow-hidden group bg-primary relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Download</span>
            </a>
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
