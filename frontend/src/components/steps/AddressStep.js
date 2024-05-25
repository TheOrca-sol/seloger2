import React from 'react';
import { Form, Input } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const AddressStep = () => {
  return (
    <div>
      <h2>Où se trouve votre appartement ?</h2>
      <p>* Information obligatoire</p>
      <Form.Item
        name="address"
        rules={[{ required: true, message: 'Veuillez saisir votre adresse' }]}
      >
        <Input placeholder="N°, nom de rue" prefix={<EnvironmentOutlined />} />
      </Form.Item>
    </div>
  );
};

export default AddressStep;
