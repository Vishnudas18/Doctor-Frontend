import React from 'react'
import './RestCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({doctors}) {
    console.log(doctors);
  return (
    <div className='cardd'>
      <Link to={`view/${doctors.id}`}><MDBCard alignment='center'>
     <div className='cards'> <MDBCardHeader><h5>{doctors.hospital}</h5></MDBCardHeader>
   <MDBCardBody>
      <MDBCardTitle><h4>{doctors.name}</h4></MDBCardTitle><br />
      <MDBCardText><h5>specialty:{doctors.specialty}</h5></MDBCardText>
      <MDBCardText><h5>⭐{doctors.rating}</h5></MDBCardText>
      <MDBBtn href='' className='btn btn-light'>More Details</MDBBtn>
    </MDBCardBody></div>
    
  </MDBCard></Link>
      
  
  </div>
  )
}

export default RestCard