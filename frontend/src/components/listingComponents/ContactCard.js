import React from 'react';
import { Card, Input, Radio, Checkbox, Button } from 'antd';

const ContactCard = () => {
  return (
    <Card className="contact-card">
      <h3>HOSMAN</h3>
      <Button type="link">Afficher le n° de téléphone</Button>
      <form className="contact-form">
        <label>Nom</label>
        <Input placeholder="Votre nom" />
        <label>E-mail</label>
        <Input placeholder="Votre e-mail" defaultValue="nciri.ayman@gmail.com" />
        <label>Téléphone</label>
        <Input placeholder="Votre téléphone" />
        <label>Je suis déjà propriétaire</label>
        <Radio.Group defaultValue="non" buttonStyle="solid">
          <Radio.Button value="oui">oui</Radio.Button>
          <Radio.Button value="non">non</Radio.Button>
        </Radio.Group>
        <label>Ajouter un message ? (facultatif)</label>
        <Input.TextArea placeholder="Votre message" />
        <Checkbox>Je ne souhaite pas recevoir les annonces similaires et les suggestions personnalisées de SeLoger.</Checkbox>
        <Button type="primary" block>Contacter l'agence</Button>
        <Button type="default" block>Proposer un prix</Button>
      </form>
      <p className="disclaimer">
        En cliquant sur "Contacter l'agence", vous acceptez nos <a href="#">Conditions Générales d'Utilisation</a>.
      </p>
    </Card>
  );
};

export default ContactCard;
