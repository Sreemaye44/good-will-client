import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';

const Navbar = () => {
  const{user, logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    const menuItems= <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/Blog'>Blog</Link></li>
    
    { user?.uid?
      <>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><button className='btn btn-primary rounded-md' onClick={handleLogOut}>Sign Out</button></li> 
      </>
      :
      <li><Link className='btn btn-primary rounded-md' to='/login'>Login</Link></li>
      }

 
</React.Fragment>
    return (
        <div className="navbar  py-10 flex justify-around">
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
    <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Good-will Store</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <label  htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
</div>
    );
};

export default Navbar;