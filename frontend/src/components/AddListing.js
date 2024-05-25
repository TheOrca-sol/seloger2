// src/components/AddListing.js
import React from 'react';
import './AddListing.css';
import { useNavigate } from 'react-router-dom';

const AddListing = () => {
    const navigate = useNavigate();
    const navigateToPropertyDetails = () => {
    navigate('/property-details');
};
  return (
    <div className="add-listing-page">
      <div className="left-section">
        <img src="path/to/image.jpg" alt="Interior" className="left-image" />
      </div>
      <div className="right-section">
        <h2>Vendez votre bien immobilier de particulier à particulier gratuitement sur SeLoger</h2>
        <ul>
          <li>
            <span className="icon">🏡</span>
            Présentez votre bien immobilier et ses caractéristiques
          </li>
          <li>
            <span className="icon">🔧</span>
            Mettez en avant ce qui le rend unique
          </li>
          <li>
            <span className="icon">💰</span>
            Fixez le prix de vente de votre maison ou appartement
          </li>
          <li>
            <span className="icon">📅</span>
            Commencez maintenant, revenez plus tard
          </li>
        </ul>
        <button className="cta-button" onClick={navigateToPropertyDetails}>Créer mon annonce</button>
      </div>
    </div>
  );
};

export default AddListing;
