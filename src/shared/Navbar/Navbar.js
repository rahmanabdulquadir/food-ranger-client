import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const {name, user, logOut} = useContext(AuthContext)
  const menuItems = <>
  {
    user?.email ? <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/services'}>Services</Link></li>
    <li><Link to={'/reviews'}>My Reviews</Link></li>
    <li><Link to={'/add_services'}>Add Service</Link></li>
    <li><Link to={'/blog'}>Blogs</Link></li>
    </>
    :
    <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/services'}>Services</Link></li>
    <li><Link to={'/blog'}>Blogs</Link></li>
    </>
  }
  </>;

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(err => console.error(err))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Food Ranger</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          {
            user?.email ? <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div> : <div className="w-10 rounded-full">
            <img src='' />
          </div>
          }
        </label>
        {
          user?.email ? 
          <Link onClick={handleLogOut} to={'/login'}>
          <a className="btn rounded-md">Log Out</a>
          <p>welcome, {user?.email}</p>
        </Link>
        :
        <Link to={'/login'}>
          <a className="btn rounded-md">Log In</a>
          <p>welcome, {user?.email}</p>
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
