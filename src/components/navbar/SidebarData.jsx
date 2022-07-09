import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "About Rachita",
    path: "#aboutRachita",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Girl Power Talk",
    path: "#aboutGPT",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Blogs by Rachita",
    path: "#blog",
    icon: <FaIcons.FaBlogger />,
    cName: "nav-text",
  },
  {
    title: "In the News",
    path: "#news",
    icon: <FaIcons.FaNewspaper />,
    cName: "nav-text",
  },
  {
    title: "All Vlogs",
    path: "#vlogs",
    icon: <FaIcons.FaFileVideo />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "#contactUS",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
