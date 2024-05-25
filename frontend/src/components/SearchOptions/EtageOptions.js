import React from 'react';
import { Card } from 'antd';
import { LeftOutlined, HomeFilled, HomeOutlined, UpOutlined } from '@ant-design/icons';

const etageOptions = [
  { value: 'pas-de-rez-de-chaussee', label: 'Pas de rez-de-chaussée', icon: <LeftOutlined /> },
  { value: 'plain-pied', label: 'Plain-pied', icon: <HomeFilled /> },
  { value: 'rez-de-chaussee-uniquement', label: 'Rez-de-chaussée uniquement', icon: <HomeOutlined /> },
  { value: 'dernier-etage', label: 'Dernier étage uniquement', icon: <UpOutlined /> },
];

const EtageOptions = ({ selectedEtage, toggleSelectType, setSelectedEtage }) => (
  <>
                  <h3>Étage</h3>

  <div className="property-type">
    {etageOptions.map((option) => (
      <Card
        key={option.value}
        className={`property-card ${selectedEtage.includes(option.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(option.value, setSelectedEtage, selectedEtage)}
      >
        <div className="property-icon-container">
          <div className="property-icon">{option.icon}</div>
        </div>
        <div className="property-label">{option.label}</div>
      </Card>
    ))}
  </div>
  </>
);

export default EtageOptions;
