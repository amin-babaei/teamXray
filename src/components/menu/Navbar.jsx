import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userLogout, userProfile } from '../../app/features/user/userAction';

const Navbar = () => {
    const { loading,userInfo } = useSelector((state) => state.user)
    let { pathname } = useLocation();
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(userLogout());
      };
    
    useEffect(() => {
        dispatch(userProfile())
    },[dispatch])
    
  return (
    <nav className={`${pathname !=="/" ? 'bg-layout' : 'absolute top-0 w-full'} font-main shadow-lg shadow-black backdrop-blur-md py-3`}>
        <div className="containerr flex justify-between items-center">
            <Link to={"/"}>
                <img src="/images/logo.svg" alt="" className='w-20'/>
            </Link>
            <ul className='hidden sm:flex '>
                <li className='link'>
                    <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    }>
                        Home
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to={"/about"} className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    }>
                        About
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to={"/teams"} className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    }>
                        teams
                    </NavLink>
                </li>
                <li className='link'>
                    <NavLink to={"/blogs"} className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    }>
                        Blogs
                    </NavLink>
                </li>
                <li className='hidden sm:block px-3 hover:text-red-500'>
                    <NavLink to={"/apply"} className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                    }>
                        Apply
                    </NavLink>
                </li>
            </ul>
            <div className={`${loading ? 'blur-sm' :' blur-0'}`}>
                {!userInfo ? (
                <Link to="/login">
                    <button className=' bg-white text-black rounded-lg p-2 hover:opacity-60 transition-all'>signup</button>
                </Link>
                ):(
                    <>
                        <Link to='/admin'>
                            <button className=' bg-white text-black rounded-lg p-2 hover:opacity-60 transition-all'>
                                admin
                            </button>
                        </Link>
                        <button className=' bg-white text-black rounded-lg p-2 hover:opacity-60 transition-all ml-1'
                        onClick={handleLogout}
                        >
                        <i className='fas fa-sign-out-alt'></i>
                        </button>
                    </>

                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar