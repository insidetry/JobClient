import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import { MDBCardHeader, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import GoogleMapReact from 'google-map-react';
import ModalSection from './sections/ModalSection';
import TaskDescriptionComponent from "./TaskDescriptionComponent"

// state = {
//   modal1: false,
//   modal2: false,
//   modal3: false,
//   modal4: false,
//   modal5: false,
//   modal6: false,
//   modal7: false,
//   modal8: false,
//   modal9: false,
//   modal10: false,
//   modal11: false,
//   modal12: false,
//   modal13: false
// }

// toggle = nr =>  () => {
//   let modalName = 'modal' + nr;
//   this.setState({
//       [modalName]: !this.state[modalName]
//   })
// }

const TaskDescription =  () => {
    return (
        <div>
          <TaskDescriptionComponent/>
        
      </div>
	  );
	}
    export default TaskDescription;