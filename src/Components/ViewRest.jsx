import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';
import DocReview from './DocReview';

import { useParams } from 'react-router-dom'

function ViewRest() {
    const[restDetails,setrestDetails]=useState({})

    const base_url='https://doctors-backend-1y3m.onrender.com/doctors'

const {id}=useParams()
console.log(id);

const fetchRest=async()=>{
    const result= await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setrestDetails(result.data)
  }
  console.log(setrestDetails);

  useEffect(()=>{
    fetchRest()
  },[])

  return (
    <div>
       <MDBCard style={{margin:'0px'}}   className='text-white'>
      <MDBCardImage overlay src='https://media.istockphoto.com/id/1021670950/photo/health-worker-holding-patients-hand.jpg?s=2048x2048&w=is&k=20&c=jFgL3qw93wouLTI5zIr2d9WfzTiIRQOnkX54eBclt2c=' alt='...' />
      <MDBCardOverlay>
        <center>
      <MDBCard style={{width:'1000px', margin:'20px', height:'800px', textAlign:'center', }}>
      <MDBCardBody>
        <MDBCardTitle>{restDetails.hospital}</MDBCardTitle>
        <MDBCardTitle>{restDetails.name}</MDBCardTitle>
        <br />
        <MDBCardText>
      Contact :   {restDetails.phone}
       </MDBCardText>
        
        <MDBCardText>
      Email :   {restDetails.email}
        </MDBCardText>
        <MDBCardText>
      Location :   {restDetails.address}
        </MDBCardText>
        <MDBCardText>
      Available Days :   {restDetails.available_days}
        </MDBCardText>
        <hr />
                <hr />
        <h1>Reviews:</h1>
        <MDBCardText>
     <DocReview review={restDetails.reviews}/>
        </MDBCardText>
        

       
       
      </MDBCardBody>
    </MDBCard>
    </center>
      </MDBCardOverlay>
    </MDBCard>

    </div>
  )
}

export default ViewRest