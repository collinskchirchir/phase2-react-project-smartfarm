function Stats({farmers}){
  const totalFarmers = farmers.reduce((total, farmer) => {
    return total += 1
  },0)

  const registeredFarmers = farmers.reduce((total, farmer) => {
    if(farmer.status === 'registered'){
    return total += 1
    }
    return total
  },0)

  const trainedFarmers = farmers.reduce((total, farmer) => {
    if(farmer.status === 'trained'){
    return total += 1
    }
    return total
  },0)

  const certifiedFarmers = farmers.reduce((total, farmer) => {
    if(farmer.status === 'certified'){
    return total += 1
    }
    return total
  },0)

  return(
    <>
    <div class="d-flex mb-3 mt-3">        
        
        {/* <!--Card1--> */}
        <div class="col-xl-3 me-md-3">
          {/* <!--begin::Statistics Widget 5--> */}
          <div class="card card-xl-stretch mb-xl-8">
            {/* <!--begin::Body--> */}
            <div class="card-body">
              {/* <!--begin::Fa icon duotone--> */}
              <span class=" me-2 text-primary fa-xl">
                <i class="fa-duotone fa-id-card"></i>              
              </span> 
              {/* <!--end::Fa Icon--> */}
              <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-3" id="no-of-farmers">{totalFarmers}</div>
              <div class="fw-bold text-gray-400">Total Farmers</div>
            </div>
          </div>
        </div>
        {/* <!--End of Card1--> */}
        {/* <!--Card2--> */}
        <div class="col-xl-3 me-md-3">
          {/* <!--begin::Statistics Widget 5--> */}
          <div class="card card-xl-stretch mb-xl-8">
            {/* <!--begin::Body--> */}
            <div class="card-body">
              {/* <!--begin::Fa icon duotone--> */}
              <span class=" me-2 text-warning">
                <i class="fa-duotone fa-users fa-xl"></i>              
              </span>
              {/* <!--end::Fa Icon--> */}
              <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-3" id="no-of-dFarmers">{registeredFarmers}</div>
              <div class="fw-bold text-gray-400">Registered Farmers</div>
            </div>
          </div>
        </div>
        {/* <!--End of Card2--> */}
        {/* <!--Card3--> */}
        <div class="col-xl-3 me-md-3">
          {/* <!--begin::Statistics Widget 5--> */}
          <div class="card card-xl-stretch mb-xl-8">
            {/* <!--begin::Body--> */}
            <div class="card-body">
              {/* <!--begin::Fa icon duotone--> */}
              <span class=" me-2 text-success fa-xl">
              <i class="fa-duotone fa-screen-users"></i>             
              </span>
              {/* <!--end::Fa Icon--> */}
              <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-3" id="no-of-aFarmers">{trainedFarmers}</div>
              <div class="fw-bold text-gray-400">Trained Farmers</div>
            </div>
          </div>
        </div>
        {/* <!--End of Card3--> */}
        {/* <!--Card4--> */}
        <div class="col-xl-3 me-md-3">
          {/* <!--begin::Statistics Widget 5--> */}
          <div class="card card-xl-stretch mb-xl-8">
            {/* <!--begin::Body--> */}
            <div class="card-body">
              {/* <!--begin::Fa icon duotone--> */}
              <span class=" me-2 text-success fa-xl">
                <i class="fa-duotone fa-file-certificate"></i>             
              </span>  
              {/* <!--end::Fa Icon--> */}
              <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-3" id="total-prod-area">{certifiedFarmers}</div>
              <div class="fw-bold text-gray-400">Certified Farmers</div>
            </div>
          </div>
        </div>
        {/* <!--End of Card4--> */}
      </div> 
    </>
  );
}

export default Stats