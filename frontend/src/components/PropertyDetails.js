import React from 'react';
import { Steps, Radio, Button } from 'antd';
import { HomeOutlined, ApartmentOutlined, CarOutlined } from '@ant-design/icons';
import './PropertyDetails.css';

const { Step } = Steps;

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <div className="sidebar">
        <img src="path-to-logo" alt="Logo" className="logo" />
        <Steps direction="vertical" current={1}>
          <Step title="Type de bien" />
          <Step title="Adresse" />
          <Step title="Caractéristiques" />
          <Step title="Bilan énergétique" />
          <Step title="Photos" />
          <Step title="Description" />
          <Step title="Prix de vente" />
          <Step title="Contact" />
        </Steps>
      </div>
      <div className="content">
        <h2>Quel bien vendez-vous ?</h2>
        <p>* Information obligatoire</p>
        <Radio.Group className="property-type">
          <Radio.Button value="apartment">
            <ApartmentOutlined />
            <span>Appartement</span>
          </Radio.Button>
          <Radio.Button value="house">
            <HomeOutlined />
            <span>Maison</span>
          </Radio.Button>
          <Radio.Button value="parking">
            <CarOutlined />
            <span>Parking</span>
          </Radio.Button>
        </Radio.Group>
        <Button type="primary" className="continue-button">Continuer</Button>
        <p className="info">Le type de bien ne sera pas modifiable après publication</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
