import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';
import TaskListing from '../TaskListing';

const ManageTasksPage =  () => {
  return (
    <div className="dashboard-content-container" data-simplebar>
              <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                  <h3>Manage Tasks</h3>
                 
                </div>
                {/* Row */}
                <div className="row">
                  {/* Dashboard Box */}
                  <div className="col-xl-12">
                    <div className="dashboard-box margin-top-0">
                      {/* Headline */}
                      <div className="headline">
                        <h3><i className="icon-material-outline-business-center" /> My Tasks</h3>
                      </div>
                      <TaskListing/>
                      <div className="content">
                        <ul className="dashboard-box-list">
                          <li>
                            {/* Job Listing */}
                            <div className="job-listing">
                              {/* Job Listing Details */}
                              <div className="job-listing-details">
                                {/* Logo */}
                                {/* 											<a href="#" class="job-listing-company-logo">
												<img src="images/company-logo-05.png" alt="">
											</a> */}
                                {/* Details */}
                                <div className="job-listing-description">
                                  <h3 className="job-listing-title"><a href="#">Frontend React Developer</a> <span className="dashboard-status-button green">Pending Approval</span></h3>
                                  {/* Job Listing Footer */}
                                  <div className="job-listing-footer">
                                    <ul>
                                      <li><i className="icon-material-outline-date-range" /> Posted on 10 July, 2018</li>
                                      <li><i className="icon-material-outline-date-range" /> Expiring on 10 August, 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="buttons-to-right always-visible">
                              <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> View Details</a>
                              <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                              <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                            </div>
                          </li>
                          <li>
                            {/* Job Listing */}
                            <div className="job-listing">
                              {/* Job Listing Details */}
                              <div className="job-listing-details">
                                {/* Details */}
                                <div className="job-listing-description">
                                  <h3 className="job-listing-title"><a href="#">Full Stack PHP Developer</a> <span className="dashboard-status-button yellow">Expiring</span></h3>
                                  {/* Job Listing Footer */}
                                  <div className="job-listing-footer">
                                    <ul>
                                      <li><i className="icon-material-outline-date-range" /> Posted on 28 June, 2018</li>
                                      <li><i className="icon-material-outline-date-range" /> Expiring on 28 July, 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="buttons-to-right always-visible">
                              <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> View Details</a>
                              <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
                              <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                            </div>
                          </li>
                          <li>
                            {/* Job Listing */}
                            <div className="job-listing">
                              {/* Job Listing Details */}
                              <div className="job-listing-details">
                                {/* Details */}
                                <div className="job-listing-description">
                                  <h3 className="job-listing-title"><a href="#">Node.js Developer</a> <span className="dashboard-status-button red">Expired</span></h3>
                                  {/* Job Listing Footer */}
                                  <div className="job-listing-footer">
                                    <ul>
                                      <li><i className="icon-material-outline-date-range" /> Posted on 16 May, 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="buttons-to-right always-visible">
                              <a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" />View Details</a>
                              <a href="#" className="button dark ripple-effect"><i className="icon-feather-rotate-ccw" /> Refresh</a>
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
            
    // <React.Fragment>
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <MDBCard className="mt-5">
    //           <MDBView className="gradient-card-header blue darken-2">
    //             <h4 className="h4-responsive text-white">
    //               Regular map
    //             </h4>
    //           </MDBView>
    //           <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
    //             <GoogleMapReact
    //               defaultCenter={{lat: 10, lng: 10}}
    //               defaultZoom={7}
    //              />
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //       <MDBCol md="6">
    //         <MDBCard className="mt-5">
    //           <MDBView className="gradient-card-header blue darken-2">
    //             <h4 className="h4-responsive text-white">
    //               Hybrid map
    //             </h4>
    //           </MDBView>
    //           <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
    //             <GoogleMapReact
    //                 defaultCenter={{lat: 10, lng: 10}}
    //                 defaultZoom={7}
    //                 options = {{
    //                   mapTypeId: 'hybrid'
    //                 }}
    //               />
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //     </MDBRow>
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <MDBCard className="mt-5">
    //           <MDBView className="gradient-card-header blue darken-2">
    //             <h4 className="h4-responsive text-white">
    //             Satellite map
    //             </h4>
    //           </MDBView>
    //           <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
    //             <GoogleMapReact
    //                   defaultCenter={{lat: 10, lng: 10}}
    //                   defaultZoom={7}
    //                   options = {{
    //                     mapTypeId: 'satellite'
    //                   }}
    //                 />
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //       <MDBCol md="6">
    //         <MDBCard className="mt-5">
    //           <MDBView className="gradient-card-header blue darken-2">
    //             <h4 className="h4-responsive text-white">
    //               Terrain map
    //             </h4>
    //           </MDBView>
    //           <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
    //             <GoogleMapReact
    //                     defaultCenter={{lat: 10, lng: 10}}
    //                     defaultZoom={7}
    //                     options = {{
    //                       mapTypeId: 'terrain'
    //                     }}
    //                   />
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //     </MDBRow>
    // </React.Fragment>
  )
}

export default ManageTasksPage;