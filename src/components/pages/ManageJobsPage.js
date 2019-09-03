import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';
import TaskListing from '../TaskListing';

const ManageJobsPage =  () => {
  return (
    <div className="dashboard-content-container" data-simplebar>
              <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                  <h3>Manage Jobs</h3>
                
                  
                </div>
                {/* Row */}
                <div className="row">
                  {/* Dashboard Box */}
                  <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">
                      {/* Headline */}
                      <div className="headline">
                        <h3><i className="icon-material-outline-assignment" /> My Posted Jobs</h3>
                      </div>
                      <div className="content">
                        <ul className="dashboard-box-list">
                          <li>
                            {/* Job Listing */}
                            <div className="job-listing width-adjustment">
                              {/* Job Listing Details */}
                              <div className="job-listing-details">
                                {/* Details */}
                                <div className="job-listing-description">
                                  <h3 className="job-listing-title"><a href="#">Design a Landing Page</a> <span className="dashboard-status-button yellow">Expiring</span></h3>
                                  {/* Job Listing Footer */}
                                  <div className="job-listing-footer">
                                    <ul>
                                      <li><i className="icon-material-outline-access-time" /> 23 hours left</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Task Details */}
                            <ul className="dashboard-task-info">
                              <li><strong>3</strong><span>Bids</span></li>
                              <li><strong>$22</strong><span>Avg. Bid</span></li>
                              <li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
                            </ul>
                            {/* Buttons */}
                            <div className="buttons-to-right always-visible">
                              <a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Bidders <span className="button-info">3</span></a>
                              <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                              <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                            </div>
                          </li>
                          <li>
                            {/* Job Listing */}
                            <div className="job-listing width-adjustment">
                              {/* Job Listing Details */}
                              <div className="job-listing-details">
                                {/* Details */}
                                <div className="job-listing-description">
                                  <h3 className="job-listing-title"><a href="#">Food Delivery Mobile Application</a></h3>
                                  {/* Job Listing Footer */}
                                  <div className="job-listing-footer">
                                    <ul>
                                      <li><i className="icon-material-outline-access-time" /> 6 days, 23 hours left</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Task Details */}
                            <ul className="dashboard-task-info">
                              <li><strong>3</strong><span>Bids</span></li>
                              <li><strong>$3,200</strong><span>Avg. Bid</span></li>
                              <li><strong>$2,500 - $4,500</strong><span>Fixed Price</span></li>
                            </ul>
                            {/* Buttons */}
                            <div className="buttons-to-right always-visible">
                              <a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Bidders <span className="button-info">3</span></a>
                              <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                              <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row / End */}
                {/* Footer */}
                <div className="dashboard-footer-spacer" />
                <div className="small-footer margin-top-15">
                  <div className="small-footer-copyrights">
                    © 2018 <strong>Hireo</strong>. All Rights Reserved.
                  </div>
                  <ul className="footer-social-links">
                    <li>
                      <a href="#" title="Facebook" data-tippy-placement="top">
                        <i className="icon-brand-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter" data-tippy-placement="top">
                        <i className="icon-brand-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Google Plus" data-tippy-placement="top">
                        <i className="icon-brand-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="LinkedIn" data-tippy-placement="top">
                        <i className="icon-brand-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                {/* Footer / End */}
              </div>
            </div>
  )
}

export default ManageJobsPage;