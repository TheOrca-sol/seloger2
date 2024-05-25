import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import './SellPage.css';
import { useNavigate } from 'react-router-dom';

const SellPage = () => {
    const navigate = useNavigate();
    const navigateToCreateListing = () => {
    navigate('/add-listing');
};
  return (
    <div className="sell-page">
      <div className="breadcrumb">
        <a href="/proprietaire">Dépôt d'annonce</a> &gt; Propriétaire &gt; <span>Vendre</span>
      </div>
      <h1>Vous avez un bien <span className="highlight">à vendre</span></h1>
      <a className="back-link" href="/proprietaire">&lt; Retour</a>

      <p className="intro-text">Vendez seul ou bien accompagné, <span className="highlight">vous avez le choix</span>.</p>

      <Row gutter={16}>
        <Col span={12}>
          <Card className="sell-option">
            <h2>Vendez par vous-même, à votre rythme</h2>
            <p>Faites tout vous-même — des photos jusqu'à la signature.</p>
            <ul>
              <li>Service gratuit réservé aux particuliers</li>
              <li>Présentation optimale de votre bien</li>
              <li>Jusqu’à 8 photos sur votre annonce</li>
              <li>Tous vos contacts dans votre espace propriétaire</li>
            </ul>
            <Button type="primary" onClick={navigateToCreateListing}>Déposer mon annonce</Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card className="sell-option">
            <h2>Vendez avec une agence, en toute confiance</h2>
            <p>Profitez de l'accompagnement d'un expert à chaque étape de votre projet.</p>
            <ul>
              <li>Expertise locale & conseils dans vos démarches</li>
              <li>Estimation personnalisée du prix de vente</li>
              <li>Sélection des acheteurs & gestion des visites</li>
              <li>Aide à la négociation du prix de vente</li>
            </ul>
            <Button type="primary">Trouver l'agence pour mon projet</Button>
          </Card>
        </Col>
      </Row>

      <div className="advertisement">
        <p>Vendez en toute sérénité et au meilleur prix avec le plus grand réseau immobilier de France.</p>
        <img src="path/to/orpi-banner.png" alt="Orpi advertisement" />
      </div>
    </div>
  );
};

export default SellPage;
