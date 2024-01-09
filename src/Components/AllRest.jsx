import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestCard from './RestCard'


function AllRest() {
const base_url =('http://localhost:3001/doctors')

const [AllRestData,setAllRestData] =useState([])

const fetchData=async()=>{
  const details =await axios.get(base_url)
  console.log(details);

  setAllRestData(details.data)
}

console.log(AllRestData);
useEffect(()=>{
  fetchData()
},[])


  return (
    
      <div><Row>
    {
      AllRestData.map(item=>(
        <Col sm={10} md={5} lg={6} xl={3}>
     
       <RestCard doctors={item}/>
        </Col>
      ))
    }
  

      </Row>
    </div>
  )
}

export default AllRest