import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allreview'>All Review</NavLink></li>
    {
      user && <div>
    <li><NavLink to='/addreview'>Add Review</NavLink></li>
   
      </div>
    }
  {
    user &&  <li><NavLink to='/gamewatchlist'>Game Watchlist</NavLink></li>
  }
  {
    user &&  <li><NavLink to='/myreview'>My Review</NavLink></li>
  }

    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
          <a className="btn btn-ghost text-xl"> Chill Gamer</a>
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

      {/* <p>{user.email}</p> */}
      
      <button onClick={logOut} className='btn '>LogOut</button>
      </div>
       : <div>
        <a onClick={()=>navigate('/login')} className="btn">Login</a>
        </div>
    }
        </div>
      </div>
    );
};

export default Navbar;