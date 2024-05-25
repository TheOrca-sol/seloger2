// src/components/MyListings.js
import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './MyListings.css';

const MyListings = () => {
  return (
    <div className="my-listings-page">
      <a href="/account" className="back-link">
        &lt; Retour à mon compte
      </a>
      <div className="listing-content">
        <div className="listing-header">
          <h2>Vous souhaitez vendre ou louer votre bien ?</h2>
          <p>Quelques minutes suffisent pour lancer votre projet.</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large" className="listing-button">
          Déposer une annonce
        </Button>
        <div className="listing-footer">
          <p>
            Vous êtes un professionnel de l'immobilier ?{' '}
            <a href="/professional-listing">Déposez une annonce via notre plateforme dédiée</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
