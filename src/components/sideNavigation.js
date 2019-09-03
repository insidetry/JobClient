import React from 'react';
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";


const TopNavigation = () => {
    return (
		<div className="sidebar-fixed position-fixed">
		<a href="#!" className="logo-wrapper waves-effect">
			{/* <img alt="MDB React Logo" className="img-fluid" src={logo}/> */}
		</a>
		<div className="dashboard-nav">
                    <div className="dashboard-nav-inner">
                      <ul data-submenu-title="Start">
                        <li><a href="/dashboard"><i className="icon-material-outline-dashboard" /> Dashboard</a></li>
						<li><a href="/dashboard"><i className="icon-material-outline-dashboard" /> Stats</a></li>
						
						</ul>
						<ul data-submenu-title="Manage">
                        <li ><a href="#"><i className="icon-material-outline-business-center" /> Sponsor</a>
                          <ul>
                            <li><a href="/postjob">Post a Job</a></li>
							<li><a href="/managejobs">Manage Jobs <span className="nav-tag">3</span></a></li>
							<li><a href="/managebidders">Manage Bidders</a></li>
                          </ul>	
                        </li>
                        <li ><a href="#"><i className="icon-material-outline-assignment" /> Contributor</a>
                          <ul>
                            <li><a href="/managetasks">Manage Tasks <span className="nav-tag">2</span></a></li>
							<li><a href="/browsejobs">Browse Jobs</a></li> 
                            <li><a href="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></a></li>
                          </ul>	
                        </li>
                      </ul>
                      <ul data-submenu-title="Account">
                        <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings" /> Settings</a></li>
                        <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new" /> Logout</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Navigation / End */}
			</div>
     
    );



}
export default TopNavigation;