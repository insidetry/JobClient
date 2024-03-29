import React, { Component }  from 'react';
import axios from 'axios';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

import $ from 'jquery'; 

const API = "https://my-json-server.typicode.com/insidetry/JobServer/myposting";
var jsonResponse;

class JobsList extends Component
{
 
    constructor(props) {
        super(props);
        this.state = {
          items: []
        }
    }

    componentDidMount(){ 
        var _this = this;
        var stocks;
        this.serverRequest =
        axios
          .get(API)
          .then(function(result) {
           
           console.log(result.data)
           jsonResponse = result.data;
           //console.log("Res " + jsonResponse.posts[0].id)
           _this.setState({
            items: result.data
          });
          })
    }


    render() {
     
      console.log(this.state.items[0])

      const renderItems = this.state.items.map(function(item, i) {
      
      return    <li>
      {/* Job Listing */}
      <div className="job-listing width-adjustment">
        {/* Job Listing Details */}
        <div className="job-listing-details">
          {/* Details */}
          <div className="job-listing-description">
            <h3 className="job-listing-title"><a href="/jobdescription/2"  >{item.Name}</a> <span className="dashboard-status-button yellow">{item.Status}</span></h3>
            {/* Job Listing Footer */}
            <div className="job-listing-footer">
              <ul>
                <li><i className="icon-material-outline-access-time" /> Posted on {item.StartDate}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Task Details */}
      <ul className="dashboard-task-info">
        <li><strong>1</strong><span>Bids</span></li>
        <li><strong>{item.LastDate}</strong><span>Bid End Date</span></li>
        <li><strong>{item.Rewards}</strong><span>Rewards</span></li>
      </ul>
      {/* Buttons */}
      <div className="buttons-to-right always-visible">
        <a href="/managebidders/{item.id}" className="button ripple-effect"><i className="icon-material-outline-supervisor-account" /> Manage Bidders <span className="button-info">3</span></a>
        <a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" /></a>
        <a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
      </div>
    </li>
    
    
      });

      return (
        <div className="content">
            <ul className="dashboard-box-list">
          {renderItems}
          </ul>
       </div>
      );
       

      }
}

export default JobsList;