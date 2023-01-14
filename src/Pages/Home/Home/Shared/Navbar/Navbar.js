import React, { useContext } from 'react';
import { FaMailBulk, FaMicrophoneAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';
import logo from './../../../../../assets/New folder/unnamed.png'

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {

    logOut()
      .then(() => {
       navigate('/login')
       })
      
    .catch(error=>console.error(error))
  }
    const menuItems= <React.Fragment>
    <li className='hover-bordered hover:text-pink-600'><Link to='/'>Home</Link></li>
    <li className='hover-bordered hover:text-pink-600'><Link to='/Blog'>Blog</Link></li>
    <li className='hover-bordered hover:text-pink-600'><Link to='/about'>About</Link></li>

    
    { user?.uid?
        <>
          
      <li className='hover-bordered hover:text-pink-600'><Link to='/dashboard'>Dashboard</Link></li>
      <li className='hover-bordered hover:text-pink-600'><button className='btn btn-primary rounded-md' onClick={handleLogOut}>Sign Out</button></li> 
      </>
      :
      <li className=''><Link className='btn bg-gradient-to-r from-emerald-300 to-pink-300 rounded-md' to='/login'>Login</Link></li>
      }

 
</React.Fragment>
  return (
    <>
      <div className="navbar py-5 px-10 flex justify-between bg-white shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
        <li tabIndex={0}>
        </li>
      </ul>
          </div>
          <img src={logo} alt="" className='w-12 rounded-full mr-5 '/>
          <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-400">Good-will Store</h1>
         
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal">
      {menuItems}
          </ul>
          
  </div>
  <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
      </div>
      </>
    );
};

export default Navbar;