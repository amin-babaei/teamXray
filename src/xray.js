import { Routes, Route, useLocation } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Apply from "./pages/apply/Apply";
import BlogForm from "./pages/admin/blog/BlogForm";
import { useEffect, lazy, Suspense } from "react";

import Loading from "./helpers/Loading";
import { SecureRoute } from "./helpers/SecureRoute";

const Blog = lazy(() => import("./pages/blog/Blog"));
const SingleBlog = lazy(() => import("./pages/blog/SingleBlog"));
const Teams = lazy(() => import("./pages/team/Teams"));
const SingleTeam = lazy(() => import("./pages/team/SingleTeam"));
const AdminBlog = lazy(() => import("./pages/admin/blog/AdminBlog"));
const AdminTeam = lazy(() => import("./pages/admin/team/AdminTeam"));
const AdminApply = lazy(() => import("./pages/admin/apply/AdminApply"));

const Xray = () => {
  
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
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:title" element={<SingleBlog />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:title" element={<SingleTeam />} />
          </Route>
          {/* admin */}
          <Route element={<SecureRoute/>}>
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
              <Route path="/admin/blog/create" element={<BlogForm />} />
              <Route path="/admin/blog/:title" element={<BlogForm />} />
              <Route path="/admin/team" element={<AdminTeam />} />
              <Route path="/admin/apply" element={<AdminApply />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Xray;