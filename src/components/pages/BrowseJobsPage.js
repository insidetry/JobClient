import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const BrowseJobsPage =  () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-4">
        <div className="sidebar-container">
          {/* Location */}
          <div className="sidebar-widget">
            <h3>Location</h3>
            <div className="input-with-icon">
              <div id="autocomplete-container">
                <input id="autocomplete-input" type="text" placeholder="Location" />
              </div>
              <i className="icon-material-outline-location-on" />
            </div>
          </div>
          {/* Category */}
          <div className="sidebar-widget">
            <h3>Category</h3>
            <select className="selectpicker default" multiple data-selected-text-format="count" data-size={7} title="All Categories">
              <option>Admin Support</option>
              <option>Customer Service</option>
              <option>Data Analytics</option>
              <option>Design &amp; Creative</option>
              <option>Legal</option>
              <option>Software Developing</option>
              <option>IT &amp; Networking</option>
              <option>Writing</option>
              <option>Translation</option>
              <option>Sales &amp; Marketing</option>
            </select>
          </div>
          {/* Keywords */}
          <div className="sidebar-widget">
            <h3>Keywords</h3>
            <div className="keywords-container">
              <div className="keyword-input-container">
                <input type="text" className="keyword-input" placeholder="e.g. task title" />
                <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
              </div>
              <div className="keywords-list">{/* keywords go here */}</div>
              <div className="clearfix" />
            </div>
          </div>
          {/* Budget */}
          <div className="sidebar-widget">
            <h3>Fixed Price</h3>
            <div className="margin-top-55" />
            {/* Range Slider */}
            <input className="range-slider" type="text" defaultValue data-slider-currency="$" data-slider-min={10} data-slider-max={2500} data-slider-step={25} data-slider-value="[50,2500]" />
          </div>
          {/* Hourly Rate */}
          <div className="sidebar-widget">
            <h3>Hourly Rate</h3>
            <div className="margin-top-55" />
            {/* Range Slider */}
            <input className="range-slider" type="text" defaultValue data-slider-currency="$" data-slider-min={10} data-slider-max={150} data-slider-step={5} data-slider-value="[10,200]" />
          </div>
          {/* Tags */}
          <div className="sidebar-widget">
            <h3>Skills</h3>
            <div className="tags-container">
              <div className="tag">
                <input type="checkbox" id="tag1" />
                <label htmlFor="tag1">front-end dev</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag2" />
                <label htmlFor="tag2">angular</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag3" />
                <label htmlFor="tag3">react</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag4" />
                <label htmlFor="tag4">vue js</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag5" />
                <label htmlFor="tag5">web apps</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag6" />
                <label htmlFor="tag6">design</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag7" />
                <label htmlFor="tag7">wordpress</label>
              </div>
            </div>
            <div className="clearfix" />
            {/* More Skills */}
            <div className="keywords-container margin-top-20">
              <div className="keyword-input-container">
                <input type="text" className="keyword-input" placeholder="add more skills" />
                <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
              </div>
              <div className="keywords-list">{/* keywords go here */}</div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="col-xl-9 col-lg-8 content-left-offset">
        <h3 className="page-title">Search Results</h3>
        <div className="notify-box margin-top-15">
          <div className="switch-container">
            <label className="switch"><input type="checkbox" /><span className="switch-button" /><span className="switch-text">Turn on email alerts for this search</span></label>
          </div>
          <div className="sort-by">
            <span>Sort by:</span>
            <select className="selectpicker hide-tick">
              <option>Relevance</option>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Random</option>
            </select>
          </div>
        </div>
        {/* Tasks Container */}
        <div className="tasks-list-container margin-top-35">
          {/* Task */}
          <a href="single-task-page.html" className="task-listing">
            {/* Job Listing Details */}
            <div className="task-listing-details">
              {/* Details */}
              <div className="task-listing-description">
                <h3 className="task-listing-title">Food Delviery Mobile App</h3>
                <ul className="task-icons">
                  <li><i className="icon-material-outline-location-on" /> San Francisco</li>
                  <li><i className="icon-material-outline-access-time" /> 2 minutes ago</li>
                </ul>
                <p className="task-listing-text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.</p>
                <div className="task-tags">
                  <span>iOS</span>
                  <span>Android</span>
                  <span>mobile apps</span>
                  <span>design</span>
                </div>
              </div>
            </div>
            <div className="task-listing-bid">
              <div className="task-listing-bid-inner">
                <div className="task-offers">
                  <strong>$1,000 - $2,500</strong>
                  <span>Fixed Price</span>
                </div>
                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
              </div>
            </div>
          </a>
          {/* Task */}
          <a href="single-task-page.html" className="task-listing">
            {/* Job Listing Details */}
            <div className="task-listing-details">
              {/* Details */}
              <div className="task-listing-description">
                <h3 className="task-listing-title">2000 Words English to German</h3>
                <ul className="task-icons">
                  <li><i className="icon-material-outline-location-off" /> Online Job</li>
                  <li><i className="icon-material-outline-access-time" /> 5 minutes ago</li>
                </ul>
                <p className="task-listing-text">Bring to the table win-win strategies to ensure domination and user generated content in real-time will have multiple touchpoints.</p>
                <div className="task-tags">
                  <span>copywriting</span>
                  <span>translating</span>
                  <span>editing</span>
                </div>
              </div>
            </div>
            <div className="task-listing-bid">
              <div className="task-listing-bid-inner">
                <div className="task-offers">
                  <strong>$75</strong>
                  <span>Fixed Price</span>
                </div>
                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
              </div>
            </div>
          </a>
          {/* Task */}
          <a href="single-task-page.html" className="task-listing">
            {/* Job Listing Details */}
            <div className="task-listing-details">
              {/* Details */}
              <div className="task-listing-description">
                <h3 className="task-listing-title">Fix Python Selenium Code</h3>
                <ul className="task-icons">
                  <li><i className="icon-material-outline-location-off" /> Online Job</li>
                  <li><i className="icon-material-outline-access-time" /> 30 minutes ago</li>
                </ul>
                <p className="task-listing-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional.</p>
                <div className="task-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>API Development</span>
                </div>
              </div>
            </div>
            <div className="task-listing-bid">
              <div className="task-listing-bid-inner">
                <div className="task-offers">
                  <strong>$100 - $150</strong>
                  <span>Hourly Rate</span>
                </div>
                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
              </div>
            </div>
          </a>
          {/* Task */}
          <a href="single-task-page.html" className="task-listing">
            {/* Job Listing Details */}
            <div className="task-listing-details">
              {/* Details */}
              <div className="task-listing-description">
                <h3 className="task-listing-title">WordPress Theme Installation</h3>
                <ul className="task-icons">
                  <li><i className="icon-material-outline-location-off" /> Online Job</li>
                  <li><i className="icon-material-outline-access-time" /> 1 hour ago</li>
                </ul>
                <p className="task-listing-text">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate customer service with robust ideas.</p>
                <div className="task-tags">
                  <span>WordPress</span>
                  <span>Theme Installation</span>
                </div>
              </div>
            </div>
            <div className="task-listing-bid">
              <div className="task-listing-bid-inner">
                <div className="task-offers">
                  <strong>$100</strong>
                  <span>Fixed Price</span>
                </div>
                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
              </div>
            </div>
          </a>
          {/* Task */}
          <a href="single-task-page.html" className="task-listing">
            {/* Job Listing Details */}
            <div className="task-listing-details">
              {/* Details */}
              <div className="task-listing-description">
                <h3 className="task-listing-title">PHP Core Website Fixes</h3>
                <ul className="task-icons">
                  <li><i className="icon-material-outline-location-off" /> Online Job</li>
                  <li><i className="icon-material-outline-access-time" /> 1 hour ago</li>
                </ul>
                <p className="task-listing-text">Objectively innovate empowered manufactured products whereas parallel platforms. Extensible testing procedures for reliable supply.</p>
                <div className="task-tags">
                  <span>PHP</span>
                  <span>MySQL Administration</span>
                  <span>API Development</span>
                </div>
              </div>
            </div>
            <div className="task-listing-bid">
              <div className="task-listing-bid-inner">
                <div className="task-offers">
                  <strong>$50 - $80</strong>
                  <span>Hourly Rate</span>
                </div>
                <span className="button button-sliding-icon ripple-effect">Bid Now <i className="icon-material-outline-arrow-right-alt" /></span>
              </div>
            </div>
          </a>
          {/* Pagination */}
          <div className="clearfix" />
          <div className="row">
            <div className="col-md-12">
              {/* Pagination */}
              <div className="pagination-container margin-top-30 margin-bottom-60">
                <nav className="pagination">
                  <ul>
                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                    <li><a href="#" className="ripple-effect">1</a></li>
                    <li><a href="#" className="current-page ripple-effect">2</a></li>
                    <li><a href="#" className="ripple-effect">3</a></li>
                    <li><a href="#" className="ripple-effect">4</a></li>
                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Pagination / End */}
        </div>
        {/* Tasks Container / End */}
      </div>
    </div>
  </div>
  )
}

export default BrowseJobsPage;