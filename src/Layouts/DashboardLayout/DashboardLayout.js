import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import Navbar from "../../Pages/Home/Home/Shared/Navbar/Navbar";

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
	const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);

	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

					<ul className="menu p-4 w-80 text-base-content">
						{isSeller && !isAdmin && (
							<>
								<li>
									<Link to="/dashboard/addproduct">Add a Product</Link>
								</li>
								<li>
									<Link to="/dashboard/myproduct">My product</Link>
								</li>
								<li>
									<Link to="/dashboard/mybuyers">My Buyers</Link>
								</li>
							</>
						)}
						{isAdmin && (
							<>
								<li>
									<Link to="/dashboard/allsellers">All Sellers</Link>
								</li>
								<li>
									<Link to="/dashboard/allbuyers">All Buyers</Link>
								</li>
								<li>
									<Link to="/dashboard/reporteditems">Reported Items</Link>
								</li>
							</>
						)}
						{isBuyer && (
							<li>
								<Link to="/dashboard/myorders">My Orders</Link>
								<Link to="/dashboard/mywishlist">My Wishlist</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
