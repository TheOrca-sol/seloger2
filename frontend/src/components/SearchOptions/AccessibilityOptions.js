import React from 'react';
import { Card } from 'antd';
import { UpOutlined, UserOutlined } from '@ant-design/icons';

const accessibilityOptions = [
  { value: 'ascenseur', label: 'Ascenseur', icon: <UpOutlined /> },
  { value: 'acces-handicape', label: 'Accès handicapé', icon: <UserOutlined /> },
];

const AccessibilityOptions = ({ selectedAccessibility, toggleSelectType, setSelectedAccessibility }) => (
  <>
<h3>Accessibilité</h3>

  <div className="property-type">
    {accessibilityOptions.map((option) => (
      <Card
        key={option.value}
        className={`property-card ${selectedAccessibility.includes(option.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(option.value, setSelectedAccessibility, selectedAccessibility)}
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

export default AccessibilityOptions;
