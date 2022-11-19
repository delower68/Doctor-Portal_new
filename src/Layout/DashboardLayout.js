import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import UseAdmin from "../hooks/UseAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = UseAdmin(user?.email)
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            
          <Outlet />
          
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li className="mb-2">
              <Link to='/dashboard'>My Appointment</Link>
            </li>
            <li>
              { isAdmin && 
                <>
                <Link to='/dashboard/allUsers'>All User</Link>
                <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
                <Link to='/dashboard/managedoctors'>Manage Doctors</Link>
                </>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
