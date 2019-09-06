import React, { Component }  from 'react';
import axios from 'axios';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import $ from 'jquery'; 
import { useState } from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import MaterialUIPickers from "./--MaterialUIDatePicker"

const API = "https://my-json-server.typicode.com/insidetry/JobServer/tasks";
var jsonResponse;

class PostJobComponent extends Component
{
 
    constructor(props) {
        super(props);
        this.state = {
          //items: [],
           fname: '' ,
          businessunit: '',
          rewards: '',
          startdate:'',
          enddate:'',
          bidenddate: '',
          description: ''
        }
    }

    onSubmit = (e) => {
      let data = JSON.stringify({
        name: this.state.fname,
        description: this.state.description,
        rewards: this.state.rewards
    })

      axios.post(API, data)
        .then((result) => {
          window.location = "/managejobs";
        });

        e.preventDefault();
    }

    onChange = (e) => {
      //alert(e.target.name);
      if(e.target.name == 'fname')
       {
          this.setState({ fname: e.target.value });
       }
       else if(e.target.name == 'description')
       {
        this.setState({ description: e.target.value });
       }
       else if(e.target.name == 'rewards')
       {
        this.setState({ rewards: e.target.value });
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
     
   
      return    (
        <form onSubmit={this.onSubmit}>
      <MDBCard>
      <div className="dashboard-content-container" data-simplebar>
      <div className="dashboard-content-inner">
        {/* Dashboard Headline */}
        <div className="dashboard-headline">
          <h3>Post a Job</h3>
          {/* Breadcrumbs */}
          
        </div>
        {/* Row */}
        
        <div className="row">
          {/* Dashboard Box */}
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">
              {/* Headline */}
              <div className="headline">
                <h3><i className="icon-feather-folder-plus" /> Job Submission Form</h3>
              </div>
              <div className="content with-padding padding-bottom-10">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="submit-field">
                      <h5>Project Name</h5>
                      <input type="text" className="with-border" name='fname' value={this.state.fname} onChange={this.onChange}  placeholder="e.g. build me a website" />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="submit-field">
                      <h5>Business Unit</h5>
                      <select class="browser-default custom-select">
                        
                          <option value="1">Commodities</option>
                          <option value="2">FX</option>
                          <option value="3">Equities</option>
                        </select>
                      
                    </div>
  
       
  
                    
                  </div>
                  <div className="col-xl-4">
                    <div className="submit-field">
                      <h5>Rewards </h5>
                      <div >
                        <div id="autocomplete-container">
                          <input id="autocomplete-input" className="with-border" type="text" name='rewards' value={this.state.rewards} onChange={this.onChange} />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="submit-field">
                    
                      <h5>Start Date</h5>
                      <div className="row">
                      
                        <div className="col-xl-3">
                          <MaterialUIPickers/>
                        </div>
                        <h5>End Date</h5>
                        <div className="col-xl-3">
                        <MaterialUIPickers/>
                        
                        </div>
                        <h5>Bid End Date</h5>
                        <div className="col-xl-3">
                        <MaterialUIPickers/>
                        
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* <div className="col-xl-6">
                    <div className="submit-field">
                      <h5>What skills are required? <i className="help-icon" data-tippy-placement="right" title="Up to 5 skills that best describe your project" /></h5>
                      <div className="keywords-container">
                        <div className="keyword-input-container">
                          <input type="text" className="keyword-input with-border" placeholder="Add Skills" />
                          <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                        </div>
                        <div className="keywords-list"></div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div> */}
                  <div className="col-xl-12">
                    <div className="submit-field">
                      <h5>Describe Your Project</h5>
                      <textarea cols={30} rows={5} className="with-border" defaultValue={""} name='description' value={this.state.description}  onChange={this.onChange}/>
                      <div className="uploadButton margin-top-30">
                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                        <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Files</label>
                        <span className="uploadButton-file-name">Images or documents that might be helpful in describing your project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <a href="#" className="button ripple-effect big margin-top-30">
              <i className="icon-feather-plus" />
              <button type="submit"> Post a Job</button>
              
               </a>
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
    
    
    </MDBCard>
    </form>
      );

      }
}

export default PostJobComponent;