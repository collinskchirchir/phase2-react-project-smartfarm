import React from "react";
import Stats from "./Stats";
import Farmer from "./Farmer";
function FarmerList({farmers}){
  const farmerRows = farmers.map((farmer) => {
    
    return(
      <tr>
        <Farmer
          key={farmer.id}
          farmer={farmer} 
        />
      </tr>
    );
  })
  return(
    <div class="content container">
      <Stats />
      <div className="card">
    
          <table >
            <thead class="thead-light">
              <tr>                
                <th>Farmer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>National ID</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Status</th>
                <th>Crop Acreage</th>
                <th>Active</th>
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