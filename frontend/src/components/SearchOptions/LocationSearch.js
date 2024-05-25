import React from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

const LocationSearch = () => (
  <div className="location-search">
    <h3>Où recherchez-vous ?</h3>
    <Input placeholder="Ajouter une ville, un code postal ou un quartier" style={{ marginBottom: '10px' }} />
    <Select defaultValue="Île-de-France" style={{ width: '100%' }}>
      <Option value="ile-de-france">Île-de-France</Option>
    </Select>
  </div>
);

export default LocationSearch;
