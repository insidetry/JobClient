import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';
import JobsList from './JobsList';

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

                      <JobsList/>

                     
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