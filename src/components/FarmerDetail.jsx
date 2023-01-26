import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const FarmerDetail = ({onDeleteFarmer}) => {
    const [farmer, setFarmer] = useState([])
    const {fname, lname, dob, nat_id, crop_acre, active, status} = farmer;
    
    const {id} = useParams()
    // console.log(id)  
   
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:8001/farmers/${id}`)
            .then(r => r.json())
            .then(data => setFarmer(data))
    }, [id])
    
    if (!farmer) return <h2>Loading...</h2>

    function handleClickDelete(){
      fetch(`http://localhost:8001/farmers/${id}`, {
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then(() => {
        // redirect to farmers page
        navigate('/farmers');
        onDeleteFarmer(farmer)
      })
    }
    
  return (
    <>
   
    <div class="card container mt-5">
      <h5 class="card-header">{status}</h5>
      <div class="card-body">
        <h5 class="card-title">{fname} {lname}</h5>
        <p class="card-text">Farmer is ready for MSG</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">National ID: {nat_id}</li>
          <li class="list-group-item">Date of Birth: {dob}</li>
          <li class="list-group-item">Farm Size(acre): {crop_acre}</li>
          <li class="list-group-item">Active: {active}</li>
        </ul>
        <button onClick={handleClickDelete} class="btn btn-danger me-4">Delete Farmer</button>
        <button class="btn btn-primary">Status: NEXT STATUS</button>
      </div>
    </div>
  </>
  );
};

export default FarmerDetail;
