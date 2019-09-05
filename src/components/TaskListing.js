import React, { Component }  from 'react';
import axios from 'axios';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../assets/img-1.jpg';
import $ from 'jquery'; 

const API = "https://my-json-server.typicode.com/insidetry/JobServer/tasks";
var jsonResponse;

class TaskListing extends Component
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
      
      return  <li>
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
            <h3 className="job-listing-title"><a href="#"> {item.title}</a> <span className="dashboard-status-button green">{item.status}}</span></h3>
            {/* Job Listing Footer */}
            <div className="job-listing-footer">
              <ul>
                <li><i className="icon-material-outline-date-range" /> Posted on {item.posted}}</li>
                <li><i className="icon-material-outline-date-range" /> Expiring {item.expiring}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="buttons-to-right always-visible">
        <a href={"/taskdescription/" + item.id} className="button ripple-effect">
          <i className="icon-material-outline-supervisor-account" /> View Details</a>
          <input type="hidden" class="hiddenInput" value={item.id}/>
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

export default TaskListing;