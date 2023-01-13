import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./hamburger-menu-svgrepo-com.svg";
import Logo from "./bookIcon.jpeg";
import NavBarData from "../pages/NavBarData";
import { AiOutlineClose } from "react-icons/ai";

import styled from "styled-components";
function NavBar(props) {
  const [showSideBar, setShowSideBar] = useState(false);
  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <nav className="border-b-2 flex justify-between border-solid bg-white border-gray-400 ">
      <div className="h-16 w-16 lg:ml-10 ml-3 flex object-fit  justify-start">
        <img className="" src={Logo} alt="menu"></img>
      </div>
      <div className="flex md:justify-between   w-full justify-end">
        {NavBarData.map((item, index) => {
          return (
            <div
              key={index}
              className=" md:flex justify-between hover:brightness-50  w-full  hidden"
            >
              <button>
                <NavLink to={item.path}>{item.title}</NavLink>
              </button>
            </div>
          );
        })}

        <div onClick={openSideBar} className="w-10 h-16 active:brightness-200 ">
          <img className="flex md:hidden" src={Menu} alt="menu"></img>
        </div>
      </div>
      {showSideBar && (
        <div
          className={
            "right-0  flex md:hidden  justify-start items-start fixed flex-col w-2/3 h-full bg-gray-900 transition duration-500"
          }
        >
          <div
            onClick={openSideBar}
            className=" w-full hover:brightness-200 flex justify-end p-3 h-16"
          >
            <Close />
          </div>
          {NavBarData.map((item, index) => {
            return (
              <ul
                key={index}
                className=" md:flex text-white hover:brightness-50 mx-9 items-start w-full "
              >
                <li className="my-3">
                  <NavLink to={item.path}>
                    {item.icon}
                    {item.title}
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
const Close = styled(AiOutlineClose)`
  color: white;
  transform: scale(2);
  margin: 5%;
`;
