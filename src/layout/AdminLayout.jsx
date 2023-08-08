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
                <h1 className="hidden text-center font-main py-3 border-b-2 border-white mb-10 sm:block font-bold">xrayteam</h1>
                <ul className="flex justify-around md:flex-col text-center md:text-left text-white font-semibold">
                  <NavLink
                    className={({ isActive }) =>
                    `${isActive && 'bg-red-600'} text-sm font-light px-4 py-3 md:rounded-lg text-white shadow-lg flex-grow hover:shadow-xl md:mb-5`
                    }
                    to="/admin/blog"
                    aria-current="page"
                  >
                    <li className="md:rounded-lg font-medium">
                      Blogs
                    </li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                    `${isActive && 'bg-red-600'} text-sm font-light px-4 py-3 md:rounded-lg text-white shadow-lg flex-grow hover:shadow-xl md:mb-5`
                    }
                    to="/admin/team"
                    aria-current="page"
                  >
                    <li className="md:rounded-lg font-medium">
                      teams
                    </li>
                    </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                    `${isActive && 'bg-red-700'} text-sm font-light px-4 py-3 md:rounded-lg text-white shadow-lg flex-grow hover:shadow-xl md:mb-5`
                    }
                    to="/admin/apply"
                    aria-current="page"
                  >
                    <li className="md:rounded-lg font-medium">
                      apply
                    </li>
                  </NavLink>
                  <NavLink
                    className="text-sm font-light px-4 py-3 rounded-lg text-white shadow-lg flex-grow hover:shadow-xl md:mb-5"
                    to="/"
                    aria-current="page"
                  >
                    <li className="md:rounded-lg hover:shadow-2xl font-medium">
                      Back to Home
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
          <section className="w-full bg-black min-h-screen">
            <Outlet />
          </section>
        </div>
    </>
  );
};

export default AdminLayout;
