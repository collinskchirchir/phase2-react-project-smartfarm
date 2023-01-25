import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import FarmerList from './components/FarmerList';

function App() {
  const [farmers, setFarmers] = useState([])

  // fetch all Farmers
  useEffect(() => {
    fetch("http://localhost:8001/farmers")
    .then(resp => resp.json())
    .then(data => setFarmers(data))
  }, [])

  return (
    <>
      <Header />
      <Navbar/>
      <Form  />
      <FarmerList farmers={farmers} />
      <Footer />
    </>
  );
}

export default App;
