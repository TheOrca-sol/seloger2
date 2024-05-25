import React, { useState } from 'react';
import { Row, Col, Input, Slider, Button } from 'antd';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [price, setPrice] = useState(750000);
  const [downPayment, setDownPayment] = useState(225000);
  const [loanTerm, setLoanTerm] = useState(20);

  const notaryFees = price * 0.071;
  const loanAmount = price - downPayment;
  const interestRate = 0.0459;
  const monthlyPayment = ((loanAmount * interestRate) / 12) / (1 - Math.pow(1 + (interestRate / 12), -loanTerm * 12));

  return (
    <div className="mortgage-calculator">
      <h2>Combien me coûtera ce bien chaque mois ?</h2>
      <Row gutter={16}>
        <Col span={12}>
          <label>Prix du bien</label>
          <Input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </Col>
        <Col span={12}>
          <label>Frais de notaire (7.1%)</label>
          <Input value={notaryFees.toFixed(0)} disabled />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col span={12}>
          <label>Apport (30% recommandé)</label>
          <Input
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </Col>
        <Col span={12}>
          <label>Durée du prêt - Taux du crédit 4.59%</label>
          <Slider
            min={7}
            max={25}
            marks={{ 7: '7 ans', 10: '10 ans', 15: '15 ans', 20: '20 ans', 25: '25 ans' }}
            value={loanTerm}
            onChange={setLoanTerm}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '16px' }}>
        <Col span={12}>
          <div className="estimation">
            <h3>Estimation</h3>
            <div className="circle">
              <p>{monthlyPayment.toFixed(0)} €</p>
              <p>par mois</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="additional-info">
            <p>Montant emprunté: {loanAmount.toFixed(0)} €</p>
            <p>Coût des intérêts: {(monthlyPayment * loanTerm * 12 - loanAmount).toFixed(0)} €</p>
          </div>
        </Col>
      </Row>
      <div className="simulation-info">
        <p><strong>Vous souhaitez affiner votre projet ?</strong></p>
        <p>Bénéficiez gratuitement et sans engagement, d'une étude approfondie de votre prêt immobilier, avec notre banque partenaire Crédit Agricole.</p>
        <Button type="primary">Faire une simulation</Button>
      </div>
    </div>
  );
};

export default MortgageCalculator;
