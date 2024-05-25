import React from 'react';
import { Collapse } from 'antd';
import './PriceSection.css';

const { Panel } = Collapse;

const PriceSection = () => {
  return (
    <div className="price-section">
      <h2>À propos du prix</h2>
      <Collapse>
        <Panel header="Détails du prix" key="1">
          <p>750 000 €</p>
        </Panel>
        <Panel header="Charges à prévoir" key="2">
          <p>Charges à prévoir</p>
        </Panel>
      </Collapse>
      <h2>Prix par rapport au secteur</h2>
      <div className="price-comparison">
        <div className="price-bar">
          <div className="price-indicator" style={{ left: '70%' }}>8 824 € / m²</div>
        </div>
        <div className="price-info">
          <p>Le prix au m² de ce bien est supérieur à la moyenne du secteur.</p>
          <p>Cette information ne préjuge en aucun cas de l’évaluation du bien. Le prix dépend de l’état, de la rareté, des caractéristiques du bien.</p>
        </div>
        <a href="https://www.georisques.gouv.fr" target="_blank" rel="noopener noreferrer">Consulter les prix au m² du quartier Colombiers à Issy-les-Moulineaux</a>
      </div>
      <h2>Géorisques</h2>
      <p>Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques <a href="https://www.georisques.gouv.fr" target="_blank" rel="noopener noreferrer">https://www.georisques.gouv.fr</a></p>
    </div>
  );
};

export default PriceSection;
