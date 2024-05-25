import React from 'react';
import { Radio, Form, InputNumber } from 'antd';

const EnergyStep = () => {
  return (
    <div>
      <h2>Indiquez les résultats de votre diagnostic de performance énergétique (DPE)</h2>
      <p>* Information obligatoire</p>
      <Radio.Group>
        <Radio value="yes">Oui, je connais mes résultats</Radio>
        <Radio value="no">Non, je les renseignerai plus tard</Radio>
        <Radio value="not-applicable">Mon bien n'est pas soumis au DPE</Radio>
      </Radio.Group>
      <Form.Item
        name="energyConsumption"
        rules={[{ required: false }]}
      >
        <InputNumber placeholder="Consommations énergétiques (kWhEP/m²/an)" />
      </Form.Item>
      <Form.Item
        name="greenhouseGases"
        rules={[{ required: false }]}
      >
        <InputNumber placeholder="Emissions de gaz à effet de serre (kgCO2/m²/an)" />
      </Form.Item>
    </div>
  );
};

export default EnergyStep;
