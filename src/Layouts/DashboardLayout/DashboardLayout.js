import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/Home/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
    
      <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
      <li><Link to='/dashboard/myproduct'>My product</Link></li>
      <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
    
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;