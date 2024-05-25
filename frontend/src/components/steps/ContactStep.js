import React from 'react';
import { Form, Input } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const ContactStep = () => {
  return (
    <div>
      <h2>Coordonnées de contact</h2>
      <p>* Information obligatoire</p>
      <Form.Item
        name="contactName"
        rules={[{ required: true, message: 'Veuillez saisir votre nom' }]}
      >
        <Input placeholder="Nom d'utilisateur" prefix={<PhoneOutlined />} />
      </Form.Item>
      <Form.Item name="phone">
        <Input placeholder="Numéro de téléphone" prefix={<PhoneOutlined />} />
      </Form.Item>
    </div>
  );
};

export default ContactStep;
