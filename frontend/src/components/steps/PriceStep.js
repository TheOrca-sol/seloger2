import React from 'react';
import { Form, Input } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

const PriceStep = () => {
  return (
    <div>
      <h2>A quel prix vendez-vous votre appartement ?</h2>
      <p>* Information obligatoire</p>
      <Form.Item
        name="price"
        rules={[{ required: true, message: 'Veuillez saisir le prix de vente' }]}
      >
        <Input placeholder="Prix de vente" prefix={<DollarOutlined />} />
      </Form.Item>
    </div>
  );
};

export default PriceStep;
