import Stats from "./Stats";
function FarmerList(){
  return(
    <div class="content container">
      <Stats />
      <div className="card">
    
          <table >
            <thead class="thead-light">
              <tr>                
                <th>Farmer Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>National ID</th>
                <th>Gender</th>
                <th>Status</th>
                <th>DOB</th>
                <th>Active</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              
            </tbody>
          </table>
        
    
      </div>
    </div>
  );
}

export default FarmerList