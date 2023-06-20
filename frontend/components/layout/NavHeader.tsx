"use client";
import React, { useState, useEffect, Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoD from "@/assets/img/logo_black.png";
import LogoW from "@/assets/img/logo_white.png";
import ToggleIcon from "@/assets/img/icons/nav_toggle_icon.svg";
import ToggleIconW from "@/assets/img/icons/nav_toggle_icon_white.svg";
import SearchIcon from "@/assets/img/icons/search_icon.svg";
import SearchIconW from "@/assets/img/icons/search_icon_white.svg";
import ArrowUp from "@/assets/img/icons/chevron_up_icon.svg";
import ArrowDown from "@/assets/img/icons/chevron_down_icon.svg";
import ArrowUpWhite from "@/assets/img/icons/chevron_up_icon_white.svg";
import ArrowDownWhite from "@/assets/img/icons/chevron_down_icon_white.svg";
import Darkmode from "./DarkMode";
import { Disclosure, Transition } from "@headlessui/react";
import Modal from "../Modal";
import SearchBox from "./SearchBox";
import { useRouter } from "next/router";

interface MenuItem {
  id: string;
  slug: string;
  label: string;
  dropdown: boolean;
  dropdownItems: DropdownItem[];
}

interface DropdownItem {
  id: string;
  slug: string;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    id: "main01",
    slug: "",
    label: "Home",
    dropdown: false,
    dropdownItems: [],
  },
  {
    id: "main02",
    slug: "news-stories",
    label: "News Stories",
    dropdown: true,
    dropdownItems: [
      {
        id: "main02-sub01",
        slug: "category/innovation",
        label: "Innovation",
      },
      {
        id: "main02-sub02",
        slug: "category/entrepreneurship",
        label: "Entrepreneurship",
      },
      {
        id: "main02-sub03",
        slug: "category/tech-world",
        label: "Tech World",
      },
      {
        id: "main02-sub04",
        slug: "category/news",
        label: "News",
      },
    ],
  },
  {
    id: "main03",
    slug: "publications",
    label: "Publications",
    dropdown: true,
    dropdownItems: [
      {
        id: "main03-sub01",
        slug: "category/digital-creatives",
        label: "Digital Creatives",
      },
      {
        id: "main03-sub02",
        slug: "category/articles",
        label: "Articles",
      },
      {
        id: "main03-sub03",
        slug: "category/press-release",
        label: "Press Release",
      },
    ],
  },
  {
    id: "main04",
    slug: "opportunities",
    label: "Opportunities",
    dropdown: false,
    dropdownItems: [],
  },
  {
    id: "main05",
    slug: "services",
    label: "Services",
    dropdown: true,
    dropdownItems: [
      {
        id: "main05-sub01",
        slug: "our-services",
        label: "Our Services",
      },
      {
        id: "main05-sub02",
        slug: "category/sponsored-content",
        label: "Sponsored Content",
      },
    ],
  },
  {
    id: "main06",
    slug: "about-us",
    label: "About Us",
    dropdown: false,
    dropdownItems: [],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storedTheme = typeof window !== 'undefined' && localStorage.getItem('theme') === "dark";
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme);
  const [searchOpen, setSearchOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = router.pathname;
  const { slug } = router.query;
  const urlParts = pathname.split('/');
  const lastWord = urlParts[urlParts.length - 1];

  const isActive = (menuId: string) => {
    return lastWord === menuId;
  };
  const isActiveDropdown = (menuId: string) => {
    return `category/${slug}` === menuId;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dialogRef.current &&
        event.target instanceof Node &&
        !dialogRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex py-0 items-center flex-col lg:flex-row md:flex-nowrap lg:justify-center bg-white dark:bg-slate-800 shadow-[0_0px_1px_0_rgba(0,0,0,0.1)] dark:shadow-[0_0px_1px_0_rgba(255,255,255,0.1)] transition-all duration-[0.08s] fixed z-[1030] top-0 inset-x-0 justify-center">
      <div className="xsm:w-10/12 w-11/12 flex flex-col justify-center items-center text-primary-black dark:text-primary-white">
        <div className="w-full m-auto">
          <div className="flex flex-nowrap lg:justify-between items-center gap-8">
            <div className="w-full lg:w-auto flex lg:justify-normal justify-between items-center">
              <Link href="/" className="max-w-[8.175rem] inline-block text-xl leading-[inherit] whitespace-nowrap py-[0.68rem] transition-all duration-[0.02s]">
                <Image src={LogoD} className="w-20 md:w-24 block dark:hidden" alt="dta logo" />
                <Image src={LogoW} className="w-20 md:w-24 hidden dark:block" alt="dta logo" />
              </Link>
              <div className="lg:hidden ml-4">
                <button
                  className="flex self-center text-[1.15rem] leading-none text-[rgba(0,14,30,0.5)] dark:text-[rgba(250,255,245,1)] rounded px-2 py-1 ring-[rgba(0,14,30,0.1)] dark:ring-[rgba(250,255,245,0.1)] ring-offset-1 ring-1 cursor-pointer"
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Image src={ToggleIcon} className="block dark:hidden" alt="Toggle Menu" />
                  <Image src={ToggleIconW} className="hidden dark:block" alt="Toggle Menu" />
                </button>
              </div>
            </div>
            <div className={`lg:flex flex-row items-center space-x-6 hidden `}>
              {menuItems.map((menuItem) => (
                <div key={menuItem.id} className="relative">
                  {menuItem.dropdown ? (
                    <Disclosure
                      as="div"
                      className="inline-block"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={`flex flex-row items-center text-base hover:text-primary-green ${isActive(menuItem.slug) ? 'text-secondary-green font-bold' : 'font-medium'}`}>
                            {menuItem.label}
                            {open && menuItem.id ? (
                              <>
                                <Image
                                  src={ArrowUp}
                                  alt="Dropdown Arrow Up"
                                  className="pt-1 block dark:hidden"
                                  aria-hidden="true"
                                />
                                <Image
                                  src={ArrowUpWhite}
                                  alt="Dropdown Arrow Up"
                                  className="pt-1 hidden dark:block"
                                  aria-hidden="true"
                                />
                              </>
                            ) : (
                              <>
                                <Image
                                  src={ArrowDown}
                                  alt="Dropdown Arrow Down"
                                  className="pt-1 block dark:hidden"
                                  aria-hidden="true"
                                />
                                <Image
                                  src={ArrowDownWhite}
                                  alt="Dropdown Arrow Down"
                                  className="pt-1 hidden dark:block"
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </Disclosure.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Disclosure.Panel
                              className="absolute z-10 mt-3 px-2 w-[200px] bg-white rounded-md shadow-lg dark:bg-slate-800"
                              static
                            >
                              <div className="flex flex-col py-1">
                                {menuItem.dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.id}
                                    href={`/${dropdownItem.slug}`}
                                    className={classNames(
                                      `px-4 py-2 text-base bg-white dark:bg-slate-800 ${
                                        isActiveDropdown(dropdownItem.slug) ? 'text-secondary-green font-semibold' : ''
                                      }`
                                    )}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      href={`/${menuItem.slug}`}
                      className={`text-base ${isActive(menuItem.slug) ? 'text-secondary-green font-bold' : 'font-medium'}`}
                    >
                      {menuItem.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:flex flex-nowrap items-center gap-4 hidden ">
              <div className="">
                <button type="button" className="bg-transparent p-2 rounded-md" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                  <Darkmode />
                </button>
              </div>
              <div className="flex justify-end items-center" onClick={() => setSearchOpen(!searchOpen)}>
                <Image src={SearchIcon} className="block dark:hidden" alt="search icon" title="search" />
                <Image src={SearchIconW} className="hidden dark:block" alt="search icon" title="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${!mobileMenuOpen ? 'hidden' : 'block self-end w-full p-5 pb-2 1xsm:w-60 fill-white bg-white dark:fill-slate-800 dark:bg-slate-800'}`}>
        <div className="flex flex-col gap-4 justify-center items-center ">
          {menuItems.map((menuItem) => (
            <div key={menuItem.id} className="relative w-full">
              {menuItem.dropdown ? (
                <Disclosure
                  as="div"
                  className="border-0 border-b pb-5 border-x-primary-blue"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={`flex flex-row items-center text-base hover:text-primary-green dark:text-primary-white ${isActive(menuItem.slug) ? 'text-secondary-green dark:text-secondary-green font-bold' : 'font-medium'}`}>
                        {menuItem.label}
                        {open && menuItem.id ? (
                          <>
                            <Image
                              src={ArrowUp}
                              alt="Dropdown Arrow Up"
                              className="pt-1 block dark:hidden"
                              aria-hidden="true"
                            />
                            <Image
                              src={ArrowUpWhite}
                              alt="Dropdown Arrow Up"
                              className="pt-1 hidden dark:block"
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src={ArrowDown}
                              alt="Dropdown Arrow Down"
                              className="pt-1 block dark:hidden"
                              aria-hidden="true"
                            />
                            <Image
                              src={ArrowDownWhite}
                              alt="Dropdown Arrow Down"
                              className="pt-1 hidden dark:block"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Disclosure.Panel
                          className=" mt-3 px-2 w-[180px] bg-white rounded-md shadow-lg dark:bg-slate-800"
                          static
                        >
                          <div className="flex flex-col py-1">
                            {menuItem.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.id}
                                href={`/${dropdownItem.slug}`}
                                className={classNames(
                                  `px-4 py-2 text-sm bg-white dark:text-primary-white dark:bg-slate-800 ${
                                    isActiveDropdown(dropdownItem.slug) ? 'text-secondary-green dark:text-secondary-green semifont-bold' : ''
                                  }`
                                )}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : (
                <div className="border-0 border-b pb-5 border-x-primary-blue">
                  <Link
                    href={`/${menuItem.slug}`}
                    className={`text-base dark:text-primary-white ${
                      isActive(menuItem.slug) ? 'text-secondary-green dark:text-secondary-green font-bold' : 'font-medium'
                    }`}
                  >
                    {menuItem.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
          <div className="w-full flex justify-between items-center">
            <div className="">
              <button type="button" className="bg-transparent p-2 rounded-md" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                <Darkmode />
              </button>
            </div>
            <div onClick={() => { setSearchOpen(!searchOpen); setMobileMenuOpen(false) }}>
              <Image src={SearchIcon} className="block dark:hidden" alt="search icon" title="search" />
              <Image src={SearchIconW} className="hidden dark:block" alt="search icon" title="search" />
            </div>
          </div>
        </div>
      </div>
      <Modal open={searchOpen} setOpen={setSearchOpen}>
        <div ref={dialogRef}>
          <SearchBox />
        </div>
      </Modal>
    </nav>
  );
}
