import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './components/Home';
import FarmerList from './components/FarmerList';
import { Routes, Route } from 'react-router-dom';

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

  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home  />}></Route>
        <Route path="/form" element={<Form onAddFarmer={handleAddFarmer} />}></Route>
        <Route path="/register" element={<FarmerList farmers={farmers} />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
