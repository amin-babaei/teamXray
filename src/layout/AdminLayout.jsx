/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet-async";
import {NavLink, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
    <Helmet>
        <title>Admin</title>
      </Helmet>
        <div className="flex flex-col md:flex-row">
          <nav className="w-full bg-layout fixed bottom-0 sm:relative sm:w-auto sm:p-4">
            <div className="shadoww md:h-full z-10 w-full md:w-48 content-center">
              <div className="md:bg-transparent md:w-48  md:left-0 md:top-4 bg-mobileNav content-center md:content-start text-left justify-between">
                <h1 className="hidden text-center font-main py-3 border-b-2 border-white mb-10 sm:block">xrayteam</h1>
                <ul className="flex justify-around md:flex-col text-center md:text-left text-white">
                  <li className="rounded-lg mb-5 hover:shadow-2xl">
                    <NavLink
                      className={({ isActive }) =>
                      `${isActive && 'bg-black'} flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-lg`
                      }
                      to="/admin/blog"
                      aria-current="page"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="rounded-lg mb-5 hover:shadow-2xl">
                  <NavLink
                      className={({ isActive }) =>
                      `${isActive && 'bg-black'}  flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-lg`
                      }
                      to="/admin/team"
                      aria-current="page"
                    >
                      teams
                    </NavLink>
                  </li>
                  <li className="rounded-lg mb-5 hover:shadow-2xl">
                  <NavLink
                      className={({ isActive }) =>
                      `${isActive && 'bg-black'} flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-lg`
                      }
                      to="/admin/apply"
                      aria-current="page"
                    >
                      apply
                    </NavLink>
                  </li>
                  <li className="rounded-lg mb-5 hover:shadow-2xl">
                  <NavLink
                      className={({ isActive }) =>
                      `${isActive && 'bg-black'} flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-lg`
                      }
                      to="/"
                      aria-current="page"
                    >
                      Back to Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="w-full bg-black">
            <Outlet />
          </section>
        </div>
    </>
  );
};

export default AdminLayout;
