"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import logoImage from '../../public/images/logo/logo.png';

const Header = (props) => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const menuItemClassName = `flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 drop-shadow-[0_3px_3px_rgba(0,0,0,.75)]`;
  const buildMenuItem = (title) => (
    <strong style={{ fontSize: 20 }}>{title}</strong>
  );

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent !bg-primary !bg-opacity-50 ${
          sticky
            ? "!fixed !z-[9999] shadow-sticky backdrop-blur-sm !transition"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 sm:mr-0 xl:mr-12">
              <a
                href="/"
                className={`header-logo block w-full`}
              >
                <Image
                  src={logoImage}
                  alt="logo"
                  width={230}
                  height={230}
                  className="absolute dark:block w-230 h-230"
                  style={{ marginTop: -42, zIndex: 99 }}
                />
              </a>
            </div>
            <div className="flex w-full mt-8 items-center place-content-end px-4">
              <Link
                href="/donate"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                style={{ background: 'linear-gradient(90deg, rgba(190,29,29,1) 0%, rgba(255,143,0,1) 100%)' }}
              >
                <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,.75)]">Donate</span>
              </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                href="/calendar"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                style={{ background: 'linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(29,190,65,1) 100%)' }}
              >
                <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,.75)]">Calendar</span>
              </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                href="/volunteer"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                style={{ background: 'linear-gradient(90deg, rgba(0,11,255,1) 0%, rgba(165,29,190,1) 100%)' }}
              >
                <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,.75)]">Volunteer</span>
              </Link>
            </div>
          </div>
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
            </div>
            <div className="flex w-full items-center place-content-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          globalThis?.location?.pathname === "/" ?
                          <AnchorLink
                            href={`${menuItem.path}/`}
                            className={menuItemClassName}
                          >
                            {buildMenuItem(menuItem.title)}
                          </AnchorLink> :
                          <Link 
                            href={`${menuItem.path}`}
                            className={menuItemClassName}
                          >
                            {buildMenuItem(menuItem.title)}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3 drop-shadow-[0_2px_2px_rgba(0,0,0,.5)]"
                                >
                                  <strong>{submenuItem.title}</strong>
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/*<div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
                <div>
                  <ThemeToggler />
                </div>
                </div>*/}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
