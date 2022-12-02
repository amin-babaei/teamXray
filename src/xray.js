/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import { useEffect, lazy, Suspense } from "react";

import jwt_decode from "jwt-decode";
import axios from "axios";
import Loading from "./helpers/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, clearUser } from "./app/user/userSlice";
import { toastError } from "./helpers/Toast";

const Blog = lazy(() => import("./pages/blog/Blog"));
const SingleBlog = lazy(() => import("./pages/blog/SingleBlog"));
const Teams = lazy(() => import("./pages/team/Teams"));
const SingleTeam = lazy(() => import("./pages/team/SingleTeam"));
const AdminBlog = lazy(() => import("./pages/admin/blog/AdminBlog"));
const AdminTeam = lazy(() => import("./pages/admin/team/AdminTeam"));
const AdminApply = lazy(() => import("./pages/admin/apply/AdminApply"));

const Xray = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      const dateNow = new Date() / 1000;
      if (decoded.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
        toastError('your time has ended !')
      } else {
        dispatch(addUser(decoded.user));
      }
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:title" element={<SingleBlog />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:title" element={<SingleTeam />} />
          </Route>
          {/* admin */}
          {userInfo?.isAdmin && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                index
                element={
                  <div className="h-screen flex justify-center text-center items-center font-main sm:text-4xl text-white">
                    welcome to dashboard
                  </div>
                }
              />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/team" element={<AdminTeam />} />
              <Route path="/admin/apply" element={<AdminApply />} />
            </Route>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Xray;
