import React from 'react';
import { Card } from 'antd';
import { EyeOutlined, SmileOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

const expositionOptions = [
  { value: 'sans-vis-a-vis', label: 'Sans vis-à-vis', icon: <EyeOutlined /> },
  { value: 'orientation-sud', label: 'Orientation sud', icon: <SmileOutlined /> },
  { value: 'belle-vue', label: 'Belle vue', icon: <FundProjectionScreenOutlined /> },
];

const ExpositionOptions = ({ selectedExposition, toggleSelectType, setSelectedExposition }) => (
  <>
                  <h3>Exposition</h3>


  <div className="property-type">
    {expositionOptions.map((option) => (
      <Card
        key={option.value}
        className={`property-card ${selectedExposition.includes(option.value) ? 'selected' : ''}`}
        onClick={() => toggleSelectType(option.value, setSelectedExposition, selectedExposition)}
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

export default ExpositionOptions;
