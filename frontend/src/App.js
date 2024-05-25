import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/SearchPage';
import SearchResults from './components/SearchResults';
import Account from './components/Account';
import MyListings from './components/MyListings';
import Listing from './components/Listing';
import SellPage from './components/SellPage';
import AddListing from './components/AddListing';
import PropertyDetails from './components/PropertyDetails';
import MultiStepForm from './components/MultiStepForm';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<SearchResults/>} />
          <Route path="/account" element={<Account/>} />

          <Route path="/my-listings" element={<MyListings/>} />
          <Route path="/listing" element={<Listing/>} />
          <Route path="/add-listing" element={<AddListing/>} />
          <Route path="/sell" element={<SellPage/>} />
          <Route path="/property-details" element={<MultiStepForm/>} />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
