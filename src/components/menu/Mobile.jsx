import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <nav className="fixed bottom-0 w-full sm:hidden z-50">
      <ul className="flex justify-around text-white bg-black font-bold uppercase">
        <li className="block sm:hidden py-5 text-sm">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="block sm:hidden py-5 text-sm">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li className="block sm:hidden py-5 text-sm">
          <NavLink
            to={"/teams"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            teams
          </NavLink>
        </li>
        <li className="block sm:hidden py-5 text-sm">
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            Blogs
          </NavLink>
        </li>
        <li className="block sm:hidden py-5 text-sm">
          <NavLink
            to={"/apply"}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            Apply
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Mobile;
