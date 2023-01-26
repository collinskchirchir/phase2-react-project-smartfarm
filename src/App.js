import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './components/Home';
import FarmerList from './components/FarmerList';
import { Routes, Route } from 'react-router-dom';
import FarmerDetail from './components/FarmerDetail';

function App() {
  const [farmers, setFarmers] = useState([])

  // fetch all Farmers
  useEffect(() => {
    fetch("http://localhost:8001/farmers")
    .then(resp => resp.json())
    .then(data => setFarmers(data))
  }, [])

  function handleAddFarmer(farmer){
    const updatedFarmers = [...farmers, farmer];
    setFarmers(updatedFarmers)
  }

  function handleDeleteFarmer(deletedFarmer){
    const updatedFarmers = farmers.filter((farmer) => farmer.id !== deletedFarmer.id)
    setFarmers(updatedFarmers)
  }
  function handleUpdateFarmer(updatedFarmer){
    const updatedFarmers = farmers.map((farmer) => {
      if(farmer.id === updatedFarmer.id){
        return updatedFarmer;
      }
      else{
        return farmer
      }
    });
    setFarmers(updatedFarmers)
  }

  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home  />}></Route>
        <Route path="/form" element={<Form onAddFarmer={handleAddFarmer} />}></Route>
        <Route exact path="/farmers" element={<FarmerList farmers={farmers} onDeleteFarmer={handleDeleteFarmer}/>}></Route>
        <Route path="/farmers/:id" element={<FarmerDetail onDeleteFarmer={handleDeleteFarmer} onUpdateFarmer={handleUpdateFarmer}/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
