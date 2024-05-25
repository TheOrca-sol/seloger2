import React from 'react';
import { Card } from 'antd';
import { ApartmentOutlined, HomeOutlined, EnvironmentOutlined, CarOutlined, BuildOutlined, CrownOutlined, ShopOutlined, BankOutlined, HomeFilled, ProfileOutlined, SettingOutlined } from '@ant-design/icons';

const propertyTypes = [
  { value: 'appartement', label: 'Appartement', icon: <ApartmentOutlined /> },
  { value: 'maison', label: 'Maison', icon: <HomeOutlined /> },
  { value: 'terrain', label: 'Terrain', icon: <EnvironmentOutlined /> },
  { value: 'parking', label: 'Parking/Box', icon: <CarOutlined /> },
  { value: 'loft', label: 'Loft/Atelier', icon: <BuildOutlined /> },
  { value: 'chateau', label: 'Château', icon: <CrownOutlined /> },
  { value: 'hotel', label: 'Hôtel partic.', icon: <ShopOutlined /> },
  { value: 'batiment', label: 'Bâtiment', icon: <BankOutlined /> },
  { value: 'immeuble', label: 'Immeuble', icon: <HomeFilled /> },
  { value: 'peniche', label: 'Péniche', icon: <ProfileOutlined /> },
  { value: 'divers', label: 'Divers', icon: <SettingOutlined /> },
];

const PropertyType = ({ selectedTypes, toggleSelectType }) => (
  <div className="property-type">
    {propertyTypes.map((type) => (
      <Card
        key={type.value}
        className={`property-card ${selectedTypes.includes(type.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(type.value)}
      >
        <div className="property-icon-container">
          <div className="property-icon">{type.icon}</div>
        </div>
        <div className="property-label">{type.label}</div>
      </Card>
    ))}
  </div>
);

export default PropertyType;
