import React from 'react';
import { Card, Button } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const ListingCard = () => {
  return (
    <Card
      cover={<img alt="example" src="https://via.placeholder.com/800x400" />}
      actions={[
        <Button key="11-photos">11 Photos</Button>,
        <Button key="plan-du-bien">Plan du bien</Button>,
        <Button key="visite-3d">Visite 3D</Button>,
      ]}
    >
      <h2>Appartement à vendre</h2>
      <p>4 pièces • 3 chambres • 85 m² • Étage 3/9</p>
      <p>Quartier Colombiers à <strong>Issy-les-Moulineaux (92130)</strong></p>
      <div className="listing-icons">
        <Button icon={<EnvironmentOutlined />} type="link">Découvrir le quartier</Button>
        <Button icon={<PhoneOutlined />} type="link">Calculer un temps de trajet</Button>
        <Button icon={<MailOutlined />} type="link">Lancer la vue immersive</Button>
      </div>
      <div className="listing-description">
        <h3>Description du professionnel</h3>
        <p>
          Hosman vous propose à la vente ce 4 pièces d'une surface de 85 m² Carrez, situé Rue du Passeur de Boulogne à Issy-les-Moulineaux. 
          Lumineux et bien agencé, cet appartement dispose de deux balcons d'une surface totale de 12m2.
        </p>
      </div>
    </Card>
  );
};

export default ListingCard;
