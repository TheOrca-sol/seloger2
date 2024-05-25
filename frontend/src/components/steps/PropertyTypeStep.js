import React from 'react';
import { Radio, Card, Button, Row, Col } from 'antd';
import { HomeOutlined, ApartmentOutlined, CarOutlined } from '@ant-design/icons';
import './PropertyTypeStep.css';

const PropertyTypeStep = ({ onContinue }) => {
  return (
    <div className="property-type-step">
      <h2>Quel bien vendez-vous ?</h2>
      <p className="info-required">* Information obligatoire</p>
      <Radio.Group className="property-type-group">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6} className="property-col">
            <Radio.Button value="apartment" className="property-radio">
              <Card hoverable className="property-card">
                <ApartmentOutlined style={{ fontSize: '32px' }} />
                <span>Appartement</span>
              </Card>
            </Radio.Button>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} className="property-col">
            <Radio.Button value="house" className="property-radio">
              <Card hoverable className="property-card">
                <HomeOutlined style={{ fontSize: '32px' }} />
                <span>Maison</span>
              </Card>
            </Radio.Button>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} className="property-col">
            <Radio.Button value="parking" className="property-radio">
              <Card hoverable className="property-card">
                <CarOutlined style={{ fontSize: '32px' }} />
                <span>Parking</span>
              </Card>
            </Radio.Button>
          </Col>
        </Row>
      </Radio.Group>
      <p className="info">Le type de bien ne sera pas modifiable après publication</p>
      <Button type="primary" className="property-continue-button" onClick={onContinue}>Continuer</Button>
      <p className="disclaimer">Digital Classifieds France procède au traitement de vos données afin de gérer votre demande. Ces données pourront être transmises aux sociétés du Groupe AVIV auquel nous appartenons. Pour obtenir plus d'informations sur vos droits et sur vos données, consultez notre <a href="#">Politique de Confidentialité</a>.</p>
    </div>
  );
};

export default PropertyTypeStep;
