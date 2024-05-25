import React from 'react';
import { Card } from 'antd';
import { HomeOutlined, CoffeeOutlined, SmileOutlined, FireOutlined } from '@ant-design/icons';

const exteriorOptions = [
  { value: 'jardin', label: 'Jardin', icon: <HomeOutlined /> },
  { value: 'piscine', label: 'Piscine', icon: <CoffeeOutlined /> },
  { value: 'terrasse', label: 'Terrasse', icon: <SmileOutlined /> },
  { value: 'balcon', label: 'Balcon', icon: <FireOutlined /> },
];

const ExteriorOptions = ({ selectedExterior, toggleSelectType, setSelectedExterior }) => (
  <>
                  <h3>Extérieur</h3>

  <div className="property-type">
    {exteriorOptions.map((option) => (
      <Card
        key={option.value}
        className={`property-card ${selectedExterior.includes(option.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(option.value, setSelectedExterior, selectedExterior)}
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

export default ExteriorOptions;
