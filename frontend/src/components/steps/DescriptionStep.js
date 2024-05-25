import React from 'react';
import { Form, Input } from 'antd';

const DescriptionStep = () => {
  return (
    <div>
      <h2>Passons à la description de votre appartement</h2>
      <p>* Information obligatoire</p>
      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Veuillez saisir une description' }]}
      >
        <Input.TextArea placeholder="Description du bien" />
      </Form.Item>
    </div>
  );
};

export default DescriptionStep;
