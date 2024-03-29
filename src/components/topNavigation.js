import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import $ from 'jquery'; 

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    componentDidMount() {
        const script = document.createElement("script");
        //script.src = "/static/libs/your_script.js";
        script.async = true;
        script.src="../js/jquery-3.3.1.min.js"
        // script.src ="../js/jquery-migrate-3.0.0.min.js"
        // document.body.appendChild(script);
        // script.src="../js/mmenu.min.js"
        // document.body.appendChild(script);
        // script.src="../js/tippy.all.min.js"
        // document.body.appendChild(script);
        // script.src="../js/simplebar.min.js"
        // document.body.appendChild(script);
        // script.src="../js/bootstrap-slider.min.js"
        // document.body.appendChild(script);
        // script.src="../js/bootstrap-select.min.js"
        // document.body.appendChild(script);
        // script.src="../js/snackbar.js"
        // document.body.appendChild(script);
        // script.src="../js/clipboard.min.js"
        // document.body.appendChild(script);
        // script.src="../js/counterup.min.js"
        // document.body.appendChild(script);
        // script.src="../js/magnific-popup.min.js"
        // document.body.appendChild(script);
        // script.src="../js/slick.min.js"
        // document.body.appendChild(script);
        // script.src="../js/custom.js"
        // document.body.appendChild(script);
        // script.src="../js/jquery-3.3.1.min.js" 
        // document.body.appendChild(script);
        // script.src="../js/jquery-migrate-3.0.0.min.js" 
        // document.body.appendChild(script);
        // script.src="../js/mmenu.min.js" 
        // document.body.appendChild(script);
        // script.src="../js/tippy.all.min.js" 
        // document.body.appendChild(script);
        // script.src="../js/simplebar.min.js" 
        // document.body.appendChild(script);
        // script.src="../js/bootstrap-slider.min.js"
        // document.body.appendChild(script); 
        // script.src="../js/bootstrap-select.min.js"
        // document.body.appendChild(script); 
        // script.src="../js/snackbar.js" 
        // script.src="../js/clipboard.min.js" 
        // script.src="../js/counterup.min.js" 
        // script.src="../js/magnific-popup.min.js" 
        // script.src="../js/slick.min.js" 
        // script.src="../js/custom.js" 

        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src="../js/bootstrap-select.min.js"
        script1.async = true;
        document.body.appendChild(script1);

        script.onload = () => this.scriptLoaded();
      }

      scriptLoaded()
      {
          $(".dashboard-nav a").click(function(){
            $(this.parentNode).toggleClass('active-submenu');
            //alert("Tripathi")
        });
      }

    render() {
        return (
            <header id="header-container" className="fullwidth dashboard-header not-sticky">
            {/* Header */}
            <div id="header">
              <div className="container">
                {/* Left Side Content */}
                <div className="left-side">
                  {/* Logo */}
                  <div id="logo">
                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                  </div>
                  {/* Main Navigation */}
                  <nav id="navigation">
                    <ul id="responsive">
                      <li><a href="#">Home</a>
                        <ul className="dropdown-nav">
                          <li><a href="index.html">Home 1</a></li>
                          <li><a href="index-2.html">Home 2</a></li>
                          <li><a href="index-3.html">Home 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Find Work</a>
                        <ul className="dropdown-nav">
                          <li><a href="#">Browse Jobs</a>
                            <ul className="dropdown-nav">
                              <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                              <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                              <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                              <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                              <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                              <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Browse Tasks</a>
                            <ul className="dropdown-nav">
                              <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                              <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                              <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                              <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                            </ul>
                          </li>
                          <li><a href="browse-companies.html">Browse Companies</a></li>
                          <li><a href="single-job-page.html">Job Page</a></li>
                          <li><a href="single-task-page.html">Task Page</a></li>
                          <li><a href="single-company-profile.html">Company Profile</a></li>
                        </ul>
                      </li>
                      <li><a href="#">For Employers</a>
                        <ul className="dropdown-nav">
                          <li><a href="#">Find a Freelancer</a>
                            <ul className="dropdown-nav">
                              <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                              <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                              <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                              <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                            </ul>
                          </li>
                          <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                          <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                          <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                        </ul>
                      </li>
                      <li><a href="#" className="current">Dashboard</a>
                        <ul className="dropdown-nav">
                          <li><a href="dashboard.html">Dashboard</a></li>
                          <li><a href="dashboard-messages.html">Messages</a></li>
                          <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                          <li><a href="dashboard-reviews.html">Reviews</a></li>
                          <li><a href="dashboard-manage-jobs.html">Jobs</a>
                            <ul className="dropdown-nav">
                              <li><a href="/browsejobs">Manage Jobs</a></li>
                              <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                              <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                            </ul>
                          </li>
                          <li><a href="dashboard-manage-tasks.html">Tasks</a>
                            <ul className="dropdown-nav">
                              <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                              <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                              <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                              <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                            </ul>
                          </li>
                          <li><a href="dashboard-settings.html">Settings</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pages</a>
                        <ul className="dropdown-nav">
                          <li><a href="pages-blog.html">Blog</a></li>
                          <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                          <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                          <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                          <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                          <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                          <li><a href="pages-login.html">Login &amp; Register</a></li>
                          <li><a href="pages-404.html">404 Page</a></li>
                          <li><a href="pages-contact.html">Contact</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="clearfix" />
                  {/* Main Navigation / End */}
                </div>
                {/* Left Side Content / End */}
                {/* Right Side Content / End */}
                <div className="right-side">
                  {/*  User Notifications */}
                  <div className="header-widget hide-on-mobile">
                    {/* Notifications */}
                    <div className="header-notifications">
                      {/* Trigger */}
                      <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-bell" /><span>4</span></a>
                      </div>
                      {/* Dropdown */}
                      <div className="header-notifications-dropdown">
                        <div className="header-notifications-headline">
                          <h4>Notifications</h4>
                          <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                            <i className="icon-feather-check-square" />
                          </button>
                        </div>
                        <div className="header-notifications-content">
                          <div className="header-notifications-scroll" data-simplebar>
                            <ul>
                              {/* Notification */}
                              <li className="notifications-not-read">
                                <a href="dashboard-manage-candidates.html">
                                  <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                                  <span className="notification-text">
                                    <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                  </span>
                                </a>
                              </li>
                              {/* Notification */}
                              <li>
                                <a href="dashboard-manage-bidders.html">
                                  <span className="notification-icon"><i className=" icon-material-outline-gavel" /></span>
                                  <span className="notification-text">
                                    <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                  </span>
                                </a>
                              </li>
                              {/* Notification */}
                              <li>
                                <a href="dashboard-manage-jobs.html">
                                  <span className="notification-icon"><i className="icon-material-outline-autorenew" /></span>
                                  <span className="notification-text">
                                    Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                  </span>
                                </a>
                              </li>
                              {/* Notification */}
                              <li>
                                <a href="dashboard-manage-candidates.html">
                                  <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                                  <span className="notification-text">
                                    <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Messages */}
                    <div className="header-notifications">
                      <div className="header-notifications-trigger">
                        <a href="#"><i className="icon-feather-mail" /><span>3</span></a>
                      </div>
                      {/* Dropdown */}
                      <div className="header-notifications-dropdown">
                        <div className="header-notifications-headline">
                          <h4>Messages</h4>
                          <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                            <i className="icon-feather-check-square" />
                          </button>
                        </div>
                        <div className="header-notifications-content">
                          <div className="header-notifications-scroll" data-simplebar>
                            <ul>
                              {/* Notification */}
                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt="" /></span>
                                  <div className="notification-text">
                                    <strong>David Peterson</strong>
                                    <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                    <span className="color">4 hours ago</span>
                                  </div>
                                </a>
                              </li>
                              {/* Notification */}
                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt="" /></span>
                                  <div className="notification-text">
                                    <strong>Sindy Forest</strong>
                                    <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                    <span className="color">Yesterday</span>
                                  </div>
                                </a>
                              </li>
                              {/* Notification */}
                              <li className="notifications-not-read">
                                <a href="dashboard-messages.html">
                                  <span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt="" /></span>
                                  <div className="notification-text">
                                    <strong>Marcin Kowalski</strong>
                                    <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                    <span className="color">Yesterday</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt" /></a>
                      </div>
                    </div>
                  </div>
                  {/*  User Notifications / End */}
                  {/* User Menu */}
                  <div className="header-widget">
                    {/* Messages */}
                    <div className="header-notifications user-menu">
                      <div className="header-notifications-trigger">
                        <a href="#"><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div></a>
                      </div>
                      {/* Dropdown */}
                      <div className="header-notifications-dropdown">
                        {/* User Status */}
                        <div className="user-status">
                          {/* User Name / Avatar */}
                          <div className="user-details">
                            <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div>
                            <div className="user-name">
                              Tom Smith <span>Freelancer</span>
                            </div>
                          </div>
                          {/* User Status Switcher */}
                          <div className="status-switch" id="snackbar-user-status">
                            <label className="user-online current-status">Online</label>
                            <label className="user-invisible">Invisible</label>
                            {/* Status Indicator */}
                            <span className="status-indicator" aria-hidden="true" />
                          </div>	
                        </div>
                        <ul className="user-menu-small-nav">
                          <li><a href="dashboard.html"><i className="icon-material-outline-dashboard" /> Dashboard</a></li>
                          <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings" /> Settings</a></li>
                          <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new" /> Logout</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* User Menu / End */}
                  {/* Mobile Navigation Button */}
                  <span className="mmenu-trigger">
                    <button className="hamburger hamburger--collapse" type="button">
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </span>
                </div>
                {/* Right Side Content / End */}
              </div>
            </div>
            {/* Header / End */}
          </header>
       
            
        //     <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        //         <MDBNavbarBrand href="/">
        //             <strong>MDB</strong>
        //         </MDBNavbarBrand>
        //         <MDBNavbarToggler onClick = { this.onClick } />
        //         <MDBCollapse isOpen = { this.state.collapse } navbar>
        //             <MDBNavbarNav left>
        //                 <MDBNavItem active>
        //                     <MDBNavLink to="#">Home</MDBNavLink>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/" target="_blank">About MDB</a>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Free download</a>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
        //                 </MDBNavItem>
        //             </MDBNavbarNav>
        //             <MDBNavbarNav right>
        //                 <MDBNavItem>
        //                     <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>MDB GitHub</a>
        //                 </MDBNavItem>
        //                 <MDBNavItem>
        //                     <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>Go Pro</a>
        //                 </MDBNavItem>
        //             </MDBNavbarNav>
        //         </MDBCollapse>
        // </MDBNavbar> 
          
        );
    }
}

export default TopNavigation;