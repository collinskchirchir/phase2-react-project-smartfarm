import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const FarmerDetail = () => {
    const [farmer, setFarmer] = useState([])
    const {fname, lname, dob, nat_id, crop_acre, active, status} = farmer;
    
    const {id} = useParams()
    // console.log(id)  
   
    
    useEffect(() => {
        fetch(`http://localhost:8001/farmers/${id}`)
            .then(r => r.json())
            .then(data => setFarmer(data))
    }, [id])
    
    if (!farmer) return <h2>Loading...</h2>
    
  return (
    <div>
      <h1>{fname} {lname}</h1>
      <p>{dob}</p>
      <p>{nat_id}</p>
      <p>{crop_acre}</p>
      <p>{status}</p>
      <p>{active}</p>                
    </div>
  );
};

export default FarmerDetail;
