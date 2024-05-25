import React from 'react';
import { Checkbox } from 'antd';

const dpeOptions = [
  { value: 'A', label: 'A', color: '#4caf50', kwh: 'moins de 70 kWh', length: '2%' },
  { value: 'B', label: 'B', color: '#8bc34a', kwh: '71 kWh à 110 kWh', length: '3%' },
  { value: 'C', label: 'C', color: '#cddc39', kwh: '111 kWh à 180 kWh', length: '4%' },
  { value: 'D', label: 'D', color: '#ffeb3b', kwh: '181 kWh à 250 kWh', length: '6%' },
  { value: 'E', label: 'E', color: '#ffc107', kwh: '251 kWh à 330 kWh', length: '8%' },
  { value: 'F', label: 'F', color: '#ff9800', kwh: '331 kWh à 420 kWh', length: '10%' },
  { value: 'G', label: 'G', color: '#f44336', kwh: '+ de 421 kWh', length: '12%' },
];

const DpeOptions = ({ selectedDpe, toggleSelectType, setSelectedDpe }) => (
  <div className="dpe">
  <h3>Diagnostic de Performance Énergétique</h3>

    {dpeOptions.map((option) => (
      <div key={option.value} className="dpe-option">
        <Checkbox
          value={option.value}
          checked={selectedDpe.includes(option.value)}
          onChange={() => toggleSelectType(option.value, setSelectedDpe, selectedDpe)}
        >
          {option.label}
        </Checkbox>
        <div className="dpe-color" style={{ backgroundColor: option.color, width: option.length }}></div>
        <span className="dpe-kwh">{option.kwh}</span>
      </div>
    ))}
  </div>
);

export default DpeOptions;
