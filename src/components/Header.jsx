import React from "react";
import { Link } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-b-gray-700 border-gray-200 shadow-lg pb-6">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl ">MyGoogle</p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
            { darkTheme ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Header;
