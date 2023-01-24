function Form() {
  return(
    
    <div class="content container-fluid mt-5">
      
      <form class="">
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
                        <input type="text" class="form-control" name="firstName" id="firstNameLabel" placeholder="First Name"></input>
                        <input type="text" class="form-control" name="lastName" id="lastNameLabel" placeholder="Surname"></input>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">National ID</label>

                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="email" id="emailLabel" placeholder="35016489" aria-label="clarice@site.com"></input>
                    </div>
                  </div>
                  
                  <div class="row mt-3">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Date of Birth</label>

                    <div class="col-sm-9">
                      <input type="date" class="form-control" name="email" id="emailLabel" placeholder="clarice@site.com" aria-label="clarice@site.com"></input>
                    </div>
                  </div>

                  <div class="row mt-3 mb-4">
                    <label class="col-sm-3 col-form-label form-label">Gender</label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="male">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="userGender" id="male"></input>
                            <span class="form-check-label">Male</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}

                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="female">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="userGender" id="female"></input>
                            <span class="form-check-label">Female</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}
                      </div>
                    </div>
                  </div>                
                  
                  <div class="row mt-3 mb-4">
                    <label class="col-sm-3 col-form-label form-label">Status</label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="active">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="status" id="active"></input>
                            <span class="form-check-label">Active</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}

                        {/* <!-- Radio Check --> */}
                        <label class="form-control" for="dormant">
                          <span class="form-check">
                            <input type="radio" class="form-check-input" name="status" id="dormant"></input>
                            <span class="form-check-label">Dormant</span>
                          </span>
                        </label>
                        {/* <!-- End Radio Check --> */}
                      </div>
                    </div>
                  </div>   

                  <div className="mt-3 d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Add Transaction</button>
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