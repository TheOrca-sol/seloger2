import React, { useState } from 'react';
import { Steps, Button, Form } from 'antd';
import './MultiStepForm.css';

import PropertyTypeStep from './steps/PropertyTypeStep';
import AddressStep from './steps/AddressStep';
import CharacteristicsStep from './steps/CharacteristicsStep';
import EnergyStep from './steps/EnergyStep';
import PhotosStep from './steps/PhotosStep';
import DescriptionStep from './steps/DescriptionStep';
import PriceStep from './steps/PriceStep';
import ContactStep from './steps/ContactStep';

const { Step } = Steps;

const steps = [
  {
    title: 'Type de bien',
    content: (props) => <PropertyTypeStep {...props} />,
  },
  {
    title: 'Adresse',
    content: (props) => <AddressStep {...props} />,
  },
  {
    title: 'Caractéristiques',
    content: (props) => <CharacteristicsStep {...props} />,
  },
  {
    title: 'Bilan énergétique',
    content: (props) => <EnergyStep {...props} />,
  },
  {
    title: 'Photos',
    content: (props) => <PhotosStep {...props} />,
  },
  {
    title: 'Description',
    content: (props) => <DescriptionStep {...props} />,
  },
  {
    title: 'Prix de vente',
    content: (props) => <PriceStep {...props} />,
  },
  {
    title: 'Contact',
    content: (props) => <ContactStep {...props} />,
  },
];

const MultiStepForm = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleFinish = (values) => {
    console.log('Form Values:', values);
    // Handle form submission
  };

  return (
    <div className="multi-step-form">
      <div className="sidebar">
        <Steps direction="vertical" current={current}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </div>
      <div className="content">
        <Form onFinish={handleFinish}>
          <div className="step-content">{steps[current].content({ onContinue: next })}</div>
          <div className="steps-action">
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Retour
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Continuer
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Publier mon annonce
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MultiStepForm;
