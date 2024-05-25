import React from 'react';
import { Card } from 'antd';
import { CarOutlined, HomeFilled, DownOutlined, UpOutlined, SettingFilled } from '@ant-design/icons';

const annexesOptions = [
  { value: 'parking', label: 'Parking', icon: <CarOutlined /> },
  { value: 'garage', label: 'Garage', icon: <HomeFilled /> },
  { value: 'sous-sol', label: 'Sous-sol', icon: <DownOutlined /> },
  { value: 'box', label: 'Box', icon: <UpOutlined /> },
  { value: 'cave', label: 'Cave', icon: <SettingFilled /> },
];

const AnnexesOptions = ({ selectedAnnexes, toggleSelectType, setSelectedAnnexes }) => (
  <>
                  <h3>Surfaces annexes</h3>

  <div className="property-type">
    {annexesOptions.map((option) => (
      <Card
        key={option.value}
        className={`property-card ${selectedAnnexes.includes(option.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(option.value, setSelectedAnnexes, selectedAnnexes)}
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

export default AnnexesOptions;
