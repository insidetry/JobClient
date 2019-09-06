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
       {/* Overview */}
       <div className="freelancer-overview manage-candidates">
                              <div className="freelancer-overview-inner">
                                {/* Avatar */}
                                <div className="freelancer-avatar">
                                  <a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                                </div>
                                {/* Name */}
                                <div className="freelancer-name">
                                  <h4><a href="#">Oldrich Ćuk <img className="flag" src="images/flags/sk.svg" alt="" title="Slovakia" data-tippy-placement="top" /></a></h4>
                                  {/* Details */}
                                  <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" /> oldrich@example.com</a></span>
                                  <span className="freelancer-detail-item"><i className="icon-feather-phone" /> (+421) 123-456-789</span>
                                  {/* Rating */}
                                  <br />
                                  <span className="company-not-rated">Minimum of 3 votes required</span>
                                  {/* Bid Details */}
                                  <ul className="dashboard-task-info bid-info">
                                    <li><strong>$3,000</strong><span>Fixed Price</span></li>
                                    <li><strong>14 Days</strong><span>Delivery Time</span></li>
                                  </ul>
                                  {/* Buttons */}
                                  <div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
                                    <a href="#small-dialog-1" className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check" /> Accept Offer</a>
                                    <a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail" /> Send Message</a>
                                    <a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2" /></a>
                                  </div>
                                </div>
                              </div>
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