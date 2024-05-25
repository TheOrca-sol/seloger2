import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const CharacteristicsStep = () => {
  return (
    <div>
      <h2>Précisez les caractéristiques principales de votre appartement</h2>
      <p>* Information obligatoire</p>
      <Form.Item
        name="surface"
        rules={[{ required: true, message: 'Veuillez saisir la surface' }]}
      >
        <Input placeholder="Superficie en m²" prefix={<InfoCircleOutlined />} />
      </Form.Item>
      <Form.Item
        name="rooms"
        rules={[{ required: true, message: 'Veuillez saisir le nombre de pièces' }]}
      >
        <InputNumber min={1} placeholder="Nombre de pièces" />
      </Form.Item>
      <Form.Item
        name="bathrooms"
        rules={[{ required: false, message: 'Veuillez saisir le nombre de salles de bain' }]}
      >
        <InputNumber min={0} placeholder="Nombre de salles de bain" />
      </Form.Item>
    </div>
  );
};

export default CharacteristicsStep;
