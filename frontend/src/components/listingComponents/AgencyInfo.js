import React from 'react';
import { Card, Button } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './AgencyInfo.css';

const AgencyInfo = () => {
  return (
    <Card className="agency-info-card">
      <div className="agency-info-header">
        <div className="agency-logo">
          <img src="https://via.placeholder.com/100" alt="Agency Logo" />
        </div>
        <div className="agency-details">
          <h3>HOSMAN</h3>
          <p>Agences immobilières</p>
          <p><EnvironmentOutlined /> 29 BD DES ITALIENS 75002 PARIS</p>
          <p>Hosman, la néo-agence immobilière qui vous aide à vendre rapidement et au meilleur prix votre bien immobilier...</p>
          <Button type="link">Afficher plus</Button>
          <Button type="link">Profil de l'agence</Button>
          <Button type="link">Nos tarifs</Button>
          <p>Informations légales de l'agence</p>
          <p>RCS : 833267289</p>
        </div>
      </div>
      <div className="agency-contact">
        <Button icon={<PhoneOutlined />} />
        <Button icon={<MailOutlined />} />
      </div>
    </Card>
  );
};

export default AgencyInfo;
