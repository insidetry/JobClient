import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import Dropdown from './Dropdown';
import MaterialUIPickers from './--MaterialUIDatePicker';
import PostJobComponent from './PostJobComponent';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import $ from 'jquery'; 
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



  // The first commit of Material-UI
  //const [selectedDate, setSelectedDate]= React.useState(new Date('2014-08-18T21:11:54'));

  function handleDateChange(date) {
    //setSelectedDate(date);
  } 

const PostJobPage =  () => {
  return (
    <MDBCard>
      <PostJobComponent/>
  </MDBCard>
  )
}

export default PostJobPage;


