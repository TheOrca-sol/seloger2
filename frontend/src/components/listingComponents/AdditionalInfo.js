import React from 'react';
import { Row, Col, Button } from 'antd';
import InfoCard from './InfoCard';

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <h2>Caractéristiques</h2>
      <Row gutter={16}>
        <Col span={12}>
          <InfoCard icon="SettingOutlined" title="Extérieur" description="Balcon 12 m²" />
        </Col>
        <Col span={12}>
          <InfoCard icon="SettingOutlined" title="Cadre et situation" description="Exposition Sud/Ouest" additionalDescription="Calme" />
        </Col>
        <Col span={12}>
          <InfoCard icon="CarOutlined" title="Surfaces annexes" description="2 parkings" />
        </Col>
        <Col span={12}>
          <InfoCard icon="UserOutlined" title="Services et accessibilité" description="Ascenseur" additionalDescription="Gardien" />
        </Col>
      </Row>
      <Button type="default">Voir toutes les caractéristiques</Button>
      <h2>Chauffage et diagnostics</h2>
      <p>Chauffage collectif</p>
      <div className="diagnostics">
        <div>
          <p>Diagnostic de performance énergétique (DPE)</p>
          <div className="dpe-scale">
            <span style={{ backgroundColor: '#4caf50', width: '16.66%' }}>A</span>
            <span style={{ backgroundColor: '#8bc34a', width: '16.66%' }}>B</span>
            <span style={{ backgroundColor: '#cddc39', width: '16.66%' }}>C</span>
            <span style={{ backgroundColor: '#ffeb3b', width: '16.66%' }}>D</span>
            <span style={{ backgroundColor: '#ffc107', width: '16.66%' }}>E</span>
            <span style={{ backgroundColor: '#ff9800', width: '16.66%' }}>F</span>
            <span style={{ backgroundColor: '#f44336', width: '16.66%' }}>G</span>
          </div>
          <Button type="default">Voir le détail</Button>
        </div>
        <div>
          <p>Indice d'émission de gaz à effet de serre (GES)</p>
          <div className="ges-scale">
            <span style={{ backgroundColor: '#bbdefb', width: '14.28%' }}>A</span>
            <span style={{ backgroundColor: '#90caf9', width: '14.28%' }}>B</span>
            <span style={{ backgroundColor: '#64b5f6', width: '14.28%' }}>C</span>
            <span style={{ backgroundColor: '#42a5f5', width: '14.28%' }}>D</span>
            <span style={{ backgroundColor: '#2196f3', width: '14.28%' }}>E</span>
            <span style={{ backgroundColor: '#1e88e5', width: '14.28%' }}>F</span>
            <span style={{ backgroundColor: '#1976d2', width: '14.28%' }}>G</span>
          </div>
        </div>
      </div>
      <h2>Informations sur la copropriété</h2>
      <p>Nombre de lots : non communiqué</p>
      <p>Charges prévisionnelles : 3468 € / an</p>
    </div>
  );
};

export default AdditionalInfo;
