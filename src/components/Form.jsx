import { useState } from "react";
function Form({ onAddFarmer }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    nat_id: "",
    dob: "",
    crop_acre: 0,
    gender: "",
    active: "true",
    status: "registered"
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const farmerObj = {
      fname: formData.fname,
      lname: formData.lname,
      nat_id: formData.nat_id,
      dob: formData.dob,
      crop_acre: formData.crop_acre,
      gender: formData.gender,
      active: formData.active,
      status: formData.status
    }
    // persist to server
    fetch("http://localhost:8001/farmers", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(farmerObj)
    })
      .then(resp => resp.json())
      .then(data => onAddFarmer(data)) 

    // reset form data
    // setFormData({
    //   fname: "",
    //   lname: "",
    //   nat_id: "",
    //   dob: "",
    //   crop_acre: 0,
    //   gender: "",
    //   active: "",
    //   status: ""
    // })

  }

  return(
    
    <div class="content container-fluid mt-5">
      
      <form onSubmit={handleSubmit} class="">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8">
            

            
              <div class="card card-lg active">
                
                <div class="card-body">
                  
                  <div class="row mt-4">
                    <label for="firstNameLabel" class="col-sm-3 col-form-label form-label">Full name 
                    <i class=""></i>
                    </label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        <input type="text" class="form-control" name="firstName" id="fname" onChange={handleChange} placeholder="First Name" required></input>
                        <input type="text" class="form-control" name="lastName" id="lname" onChange={handleChange} placeholder="Surname" required></input>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">National ID</label>

                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="email" id="nat_id" onChange={handleChange} placeholder="35016489" aria-label="clarice@site.com" required></input>
                    </div>
                  </div>
                  
                  <div class="row mt-3">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Date of Birth</label>

                    <div class="col-sm-9">
                      <input type="date" class="form-control" onChange={handleChange} name="email" id="dob" ></input>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <label class="col-sm-3 col-form-label form-label">Gender</label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="male">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="gender" id="gender" onChange={handleChange} value="male"></input>
                            <span class="form-check-label">Male</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}

                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="female">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="gender" id="gender" onChange={handleChange} value="female"></input>
                            <span class="form-check-label">Female</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Crop Acreage</label>

                    <div class="col-sm-9">
                      <input type="number" class="form-control" name="crop_acre" onChange={handleChange} id="crop_acre" placeholder="0" required></input>
                    </div>
                  </div>                
                  
                  <div class="row mt-3 mb-4">
                    <label class="col-sm-3 col-form-label form-label">Status</label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="active">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="status" onChange={handleChange} id="active" value='true'></input>
                            <span class="form-check-label">Active</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}

                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="dormant">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="status" onChange={handleChange} id="active" value='false'></input>
                            <span class="form-check-label">Dormant</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}
                      </div>
                    </div>
                  </div>   

                  <div className="mt-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Add Farmer</button>
                  </div> 
                </div>
              </div>
          </div>
        </div>
        
      </form>
      
    </div>
    
  );
}

export default Form;