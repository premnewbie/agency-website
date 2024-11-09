import { useState } from "react";

const Navbar = () => {
  const navs = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [open,setOpen] = useState(false);

  return (
    <section className="bg-purple-100 rounded-t-2xl p-5 pb-0 mx-auto">
      <nav className="container">
        <ul className="flex items-center">
          <li className="font-bold text-xl md:text-2xl pr-5 border-r border-purple-300 mr-5 text-gray-800">
            Agency
          </li>
          <li className="hidden max-sm:block mr-5">
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
          <li className="max-sm:hidden block">
            <ul className="flex lg:gap-8 items-center font-bold">
              {navs.map((item) => (
                <li
                  className="hover:border-purple-300 border rounded p-2 max-md:p-1"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
          <li className="bg-red-600 text-white text-lg px-2 py-2 rounded font-medium ml-auto flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <span className="pl-1 hidden sm:block sm:text-xs md:text-base sm:truncate">
              Get a quote
            </span>
          </li>
        </ul>
        {open && <ul className="gap-2 max-sm:block hidden items-center font-bold">
          {navs.map((item) => (
            <li className="p-2" key={item}>
              {item}
            </li>
          ))}
        </ul>}
      </nav>
    </section>
  );
};

export default Navbar;
