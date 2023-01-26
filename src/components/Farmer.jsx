function Farmer({ farmer }){
  
  const {id, fname, lname, dob, gender, status, active, nat_id, crop_acre } = farmer;
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
      <td>DELETE</td>
    </>
  );
}

export default Farmer