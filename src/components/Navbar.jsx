import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Bounce } from 'react-awesome-reveal';
import logo from '../assets/slider-1.jpeg'
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allreview'>All Review</NavLink></li>
    <li><NavLink to='/addreview'>Add Review</NavLink></li>
  {
    user &&  <li><NavLink to='/gamewatchlist'>Game Watchlist</NavLink></li>
  }
  {
    user &&  <li><NavLink to= {`/myreview/:${user.email}`}>My Review</NavLink></li>
  }

    
    </>
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

    return (
      <Bounce> <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           {
              links
           }
          </ul>
        </div>
        <img className='w-15 h-15 rounded-3xl' src={logo} alt="" />
        <a className=" text-2xl font-medium ml-4"> Chill Gamer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {
              links
           }
        </ul>
      </div>
      <div className="navbar-end">
      {
   user ? <div className='flex items-center gap-3'>
    <img className='w-10 h-10 rounded-full' src={user.
photoURL} alt="photo" 
data-tooltip-id="user-tooltip"
data-tooltip-content={user.displayName}
/>

<Tooltip id="user-tooltip" place="bottom" effect="solid" /> 
    
    <button onClick={logOut} className='btn '>LogOut</button>
    </div>
     : <div>
       <button onClick={()=>navigate('/login')}  className='btn '>Login</button>
     
      </div>
  }
  <div className='ml-5'>
  <label className="flex cursor-pointer gap-2 items-center">
    {/* Sun Icon (Light Mode) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${isDarkMode ? "hidden" : "block"}`}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>

    {/* Toggle Switch */}
    <input
      type="checkbox"
      className="toggle"
      checked={isDarkMode}
      onChange={toggleTheme}
    />

    {/* Moon Icon (Dark Mode) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${isDarkMode ? "block" : "hidden"}`}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
  </div>
      </div>
    </div></Bounce>
       
    );
};

export default Navbar;