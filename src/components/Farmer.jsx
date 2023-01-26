import { Link } from "react-router-dom";
function Farmer({ farmer, onDeleteFarmer }){
  
  const {id, fname, lname, dob, gender, status, active, nat_id, crop_acre } = farmer;

  function handleClickDelete(){
    fetch(`http://localhost:8001/farmers/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDeleteFarmer(farmer))
  }
  return(
    <>
      <td>{id}</td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{nat_id}</td>
      <td>{gender}</td>
      <td>{dob}</td>
      <td>{status}</td>
      <td>{crop_acre}</td>
      <td>{active}</td>
      <td>
        <div class="d-grid">
          <Link to={`/farmers/${id}`} className="btn btn-sm btn-secondary">
          <span><i class="fa-regular fa-trash-can me-1"></i></span>                 
          Details</Link>
        </div>
      </td>
      <td>
        <div class="d-grid">
          <button onClick={handleClickDelete} className="btn btn-sm btn-danger">
          <span><i class="fa-regular fa-trash-can me-1"></i></span>                 
          Delete</button>
        </div>
      </td>
    </>
  );
}

export default Farmer