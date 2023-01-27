import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"

const FarmerDetail = ({onDeleteFarmer, onUpdateFarmer}) => {
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
    let nextStep
    let valueOnUpdate
    if(status === "registered"){
      valueOnUpdate = "trained"
      nextStep = "Farmer is ready for training"
    }
    else if(status === "trained"){
      valueOnUpdate = "certified"
      nextStep = "Farmer is ready for certification"
    }
    else{
      nextStep = "Farmer has TRAINED AND CERTIFIED!"
    }
    

    function handleClickUpdate(){
      fetch(`http://localhost:8001/farmers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status : valueOnUpdate
      })
    })
    .then(resp => resp.json())
    .then(updatedItem => {
      // redirect page
      navigate('/farmers');
      onUpdateFarmer(updatedItem)})
    }

    const btnTextObj = {
      trained: 'TRAIN',
      certified: "CERTIFY"
    }
    
  return (
    <>
   
    <div class="card container mt-5">
      <h5 class="card-header">{status}</h5>
      <div class="card-body">
        <h5 class="card-title">{fname} {lname}</h5>
        <p class="card-text">{nextStep}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">National ID: {nat_id}</li>
          <li class="list-group-item">Date of Birth: {dob}</li>
          <li class="list-group-item">Farm Size(acre): {crop_acre}</li>
          <li class="list-group-item">Active: {active}</li>
        </ul>
        <Link class="btn btn-dark me-4" to="/farmers"><span><i class="fa-solid fa-left-to-line me-2"></i></span>Back</Link>
        <button onClick={handleClickDelete} class="btn btn-danger me-4"><span><i class="fa-solid fa-trash-can-xmark me-2"></i></span>Delete Farmer</button>
        {status !== "certified" &&  <button onClick={handleClickUpdate} class="btn btn-primary"><span><i class="fa-solid fa-screen-users me-2"></i></span>{btnTextObj[valueOnUpdate]}</button>}
      </div>
    </div>
  </>
  );
};

export default FarmerDetail;
