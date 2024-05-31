import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200">
      <div className="w-1/2 p-2 ">
        <span className="font-bold text-xl">Auth App</span>
      </div>
      <div className="p-2 flex justify-evenly w-1/2">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>{" "}
        </span>
        <span>
          <Link to="/sign-in">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
