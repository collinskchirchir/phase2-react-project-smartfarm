import React from "react";
import Stats from "./Stats";
import Farmer from "./Farmer";
import SearchBar from "./SearchBar";
function FarmerList({farmers, onDeleteFarmer, onSearch, search}){
  const filteredFarmers = farmers.filter(
    farmer => 
      farmer.fname.includes(search) ||
      farmer.lname.includes(search) ||
      farmer.status.includes(search) ||
      farmer.gender.includes(search) ||
      farmer.active.includes(search) ||
      farmer.nat_id.includes(search)            
      )
  const farmerRows = filteredFarmers.map((farmer) => {
    
    return(
      <tr>
        <Farmer
          key={farmer.id}
          farmer={farmer}
          onDeleteFarmer={onDeleteFarmer} 
        />
      </tr>
    );
  })
  return(
    <div class="content container">
      <Stats />
      <div className="card container-fluid">
    
        <SearchBar onSearch={onSearch}/>
          <table class="table table-light table-striped table-hover mt-4">
            <thead class="table-dark">
              <tr class="table-secondary">
              <th>Farmer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>National ID</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Status</th>
                <th>Crop Acreage</th>
                <th>Active</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {farmerRows}       
            </tbody>
          </table>
        
    
      </div>
    </div>
  );
}

export default FarmerList