import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import FarmerList from './components/FarmerList';

function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <Form  />
      <FarmerList />
      <Footer />
    </>
  );
}

export default App;
