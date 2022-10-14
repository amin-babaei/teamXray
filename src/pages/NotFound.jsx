import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-black sm:font-main">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found !</title>
        <meta name="description" content="404 page not found" />
      </Helmet>
      <h1 className="text-8xl md:text-[220px] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-xred text-white p-2 text-sm rounded rotate-12 absolute mb-10 mr-10">
        Page Not Found !
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-xred group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-xred group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <Link
            className="relative block px-8 py-3 bg-[#1A2238] border border-current"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </button>
    </main>
  );
};

export default NotFound;
