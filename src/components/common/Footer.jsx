import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-layout font-main">
      <div className="containerr">
        <div className="grid grid-cols-1 gap-6 justify-between items-baseline sm:grid-cols-3 pt-20 sm:pt-10">
        <div className="sm:my-0">
            <h3 className="text-center sm:text-left mb-10 text-lg">social media</h3>
            <div className="flex sm:flex-col justify-around my-5">
              <a
                href="https://www.instagram.com/xrayteam/channel/?hl=en"
                className="social hover:text-red-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/c/XRayTeam"
                className="social hover:text-red-500"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://discord.gg/u9KSJYXu"
                className="social hover:text-red-500"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="https://www.twitch.tv/team/xrayteam"
                className="social hover:text-red-500"
              >
                <i className="fab fa-twitch"></i>
              </a>
              <a
                href="https://www.twitter.com/team/xrayteamgg"
                className="social hover:text-red-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img src="/images/logo.svg" alt="xrayteam" className="w-20 mb-10"/>
            <p className="text-center sm:w-2/3">
              XRayTeam is the first and largest Persian E-Sport team that has
              been stablished since 2021 and officially started its activities
              in 2022.
            </p>
          </div>
          <div className="flex flex-col text-center sm:text-right items-center sm:items-end">
            <h3 className="text-lg">quick links</h3>
            <ul>
              <li className="my-10 underline hover:text-secondary hover:text-red-500">
                <NavLink to="/">home</NavLink>
              </li>
              <li className="my-10 underline hover:text-secondary hover:text-red-500">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="my-10 underline hover:text-secondary hover:text-red-500">
                <NavLink to="/blogs">blogs</NavLink>
              </li>
              <li className="my-10 underline hover:text-secondary hover:text-red-500">
                <NavLink to="/teams">teams</NavLink>
              </li>
              <li className="my-10 underline hover:text-secondary hover:text-red-500">
                <NavLink to="/apply">aplly</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between shadow-nav mt-10 pb-[60px] sm:pb-0">
          <h2 className="text-gray-400 text-xs">
            © {new Date().getFullYear()} xrayteam. All right reserved.
          </h2>
          <p className="text-gray-400 text-xs text-right">
            developed by <a href="https://instagram.com/aminnymous" className="text-xred">@aminonymous</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
