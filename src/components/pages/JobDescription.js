import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';



const JobDescription =  () => {
    return (
<div>
        <div className="single-page-header" data-background-image="/images/single-task.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-page-header-inner">
                <div className="left-side">
                  <div className="header-image"><a href="single-company-profile.html"><img src="/images/browse-companies-02.png" alt="" /></a></div>
                  <div className="header-details">
                    <h3>Food Delivery Mobile Application</h3>
                    <h5>About the Employer</h5>
                    <ul>
                      <li><a href="single-company-profile.html"><i className="icon-material-outline-business" /> Acue</a></li>
                      <li><div className="star-rating" data-rating={5.0} /></li>
                      <li><img className="flag" src="/images/flags/de.svg" alt="" /> Germany</li>
                      <li><div className="verified-badge-with-title">Verified</div></li>
                    </ul>
                  </div>
                </div>
                <div className="right-side">
                  <div className="salary-box">
                    <div className="salary-type">Project Budget</div>
                    <div className="salary-amount">$2,500 - $4,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Content */}
          <div className="col-xl-8 col-lg-8 content-right-offset">
            {/* Description */}
            <div className="single-page-section">
              <h3 className="margin-bottom-25">Project Description</h3>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            {/* Atachments */}
            <div className="single-page-section">
              <h3>Attachments</h3>
              <div className="attachments-container">
                <a href="#" className="attachment-box ripple-effect"><span>Project Brief</span><i>PDF</i></a>
              </div>
            </div>
            {/* Skills */}
            <div className="single-page-section">
              <h3>Skills Required</h3>
              <div className="task-tags">
                <span>iOS</span>
                <span>Android</span>
                <span>mobile apps</span>
                <span>design</span>
              </div>
            </div>
            <div className="clearfix" />
            {/* Freelancers Bidding */}
            <div className="boxed-list margin-bottom-60">
              <div className="boxed-list-headline">
                <h3><i className="icon-material-outline-group" /> Freelancers Bidding</h3>
              </div>
              <ul className="boxed-list-ul">
                <li>
                  <div className="bid">
                    {/* Avatar */}
                    <div className="bids-avatar">
                      <div className="freelancer-avatar">
                        <div className="verified-badge" />
                        <a href="single-freelancer-profile.html"><img src="" alt="" /></a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bids-content">
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4><a href="single-freelancer-profile.html">Tom Smith <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></a></h4>
                        <div className="star-rating" data-rating="4.9" />
                      </div>
                    </div>
                    {/* Bid */}
                    <div className="bids-bid">
                      <div className="bid-rate">
                        <div className="rate">$4,400</div>
                        <span>in 7 days</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bid">
                    {/* Avatar */}
                    <div className="bids-avatar">
                      <div className="freelancer-avatar">
                        <div className="verified-badge" />
                        {/* <a href="single-freelancer-profile.html"><img src={require('./user-avatar-big-02.jpg')} alt="" /></a> */}
                        <a href="single-freelancer-profile.html"><img src=""  alt="" /></a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bids-content">
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4><a href="single-freelancer-profile.html">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
                        <div className="star-rating" data-rating="4.2" />
                      </div>
                    </div>
                    {/* Bid */}
                    <div className="bids-bid">
                      <div className="bid-rate">
                        <div className="rate">$2,200</div>
                        <span>in 14 days</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bid">
                    {/* Avatar */}
                    <div className="bids-avatar">
                      <div className="freelancer-avatar">
                        <a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bids-content">
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4><a href="single-freelancer-profile.html">Marcin Kowalski <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>
                        <span className="not-rated">Minimum of 3 votes required</span>
                      </div>
                    </div>
                    {/* Bid */}
                    <div className="bids-bid">
                      <div className="bid-rate">
                        <div className="rate">$3,800</div>
                        <span>In 20 days</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bid">
                    {/* Avatar */}
                    <div className="bids-avatar">
                      <div className="freelancer-avatar">
                        <a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="bids-content">
                      {/* Name */}
                      <div className="freelancer-name">
                        <h4><a href="single-freelancer-profile.html">Sebastiano Piccio <img className="flag" src="images/flags/it.svg" alt="" title="Italy" data-tippy-placement="top" /></a></h4>
                        <div className="star-rating" data-rating="4.5" />
                      </div>
                    </div>
                    {/* Bid */}
                    <div className="bids-bid">
                      <div className="bid-rate">
                        <div className="rate">$3,400</div>
                        <span>In 10 days</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-xl-4 col-lg-4">
            <div className="sidebar-container">
              <div className="countdown green margin-bottom-35">6 days, 23 hours left</div>
              <div className="sidebar-widget">
                <div className="bidding-widget">
                  <div className="bidding-headline"><h3>Bid on this job!</h3></div>
                  <div className="bidding-inner">
                    {/* Headline */}
                    <span className="bidding-detail">Set your <strong>minimal rate</strong></span>
                    {/* Price Slider */}
                    <div className="bidding-value">$<span id="biddingVal" /></div>
                    <input className="bidding-slider" type="text" defaultValue data-slider-handle="custom" data-slider-currency="$" data-slider-min={2500} data-slider-max={4500} data-slider-value="auto" data-slider-step={50} data-slider-tooltip="hide" />
                    {/* Headline */}
                    <span className="bidding-detail margin-top-30">Set your <strong>delivery time</strong></span>
                    {/* Fields */}
                    <div className="bidding-fields">
                      <div className="bidding-field">
                        {/* Quantity Buttons */}
                        <div className="qtyButtons">
                          <div className="qtyDec" />
                          <input type="text" name="qtyInput" defaultValue={1} />
                          <div className="qtyInc" />
                        </div>
                      </div>
                      <div className="bidding-field">
                        <select className="selectpicker default">
                          <option selected>Days</option>
                          <option>Hours</option>
                        </select>
                      </div>
                    </div>
                    {/* Button */}
                    <button id="snackbar-place-bid" className="button ripple-effect move-on-hover full-width margin-top-30"><span>Place a Bid</span></button>
                  </div>
                  <div className="bidding-signup">Don't have an account? <a href="#sign-in-dialog" className="register-tab sign-in popup-with-zoom-anim">Sign Up</a></div>
                </div>
              </div>
              {/* Sidebar Widget */}
              <div className="sidebar-widget">
                <h3>Bookmark or Share</h3>
                {/* Bookmark Button */}
                <button className="bookmark-button margin-bottom-25">
                  <span className="bookmark-icon" />
                  <span className="bookmark-text">Bookmark</span>
                  <span className="bookmarked-text">Bookmarked</span>
                </button>
                {/* Copy URL */}
                <div className="copy-url">
                  <input id="copy-url" type="text" defaultValue className="with-border" />
                  <button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy" /></button>
                </div>
                {/* Share Buttons */}
                <div className="share-buttons margin-top-25">
                  <div className="share-buttons-trigger"><i className="icon-feather-share-2" /></div>
                  <div className="share-buttons-content">
                    <span>Interesting? <strong>Share It!</strong></span>
                    <ul className="share-buttons-icons">
                      <li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f" /></a></li>
                      <li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter" /></a></li>
                      <li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g" /></a></li>
                      <li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
	  );
	}
    export default JobDescription;