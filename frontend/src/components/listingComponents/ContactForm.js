import React, { useState } from 'react';
import { Input, Button, Radio, Checkbox } from 'antd';
import './ContactForm.css';

const ContactForm = () => {
  const [isOwner, setIsOwner] = useState(null);

  return (
    <div className="contact-form">
      <h2>Envie de visiter ?<br/>Une question sur cet appartement ?</h2>
      <form>
        <label>Nom</label>
        <Input placeholder="Votre nom" />
        <label>E-mail</label>
        <Input defaultValue="nciri.ayman@gmail.com" />
        <label>Téléphone</label>
        <Input placeholder="Votre téléphone" />
        <label>Je suis déjà propriétaire</label>
        <Radio.Group onChange={(e) => setIsOwner(e.target.value)} value={isOwner}>
          <Radio value={true}>oui</Radio>
          <Radio value={false}>non</Radio>
        </Radio.Group>
        <div className="additional-message">
          <a href="#">Ajouter un message ?</a>
          <Checkbox>Je ne souhaite pas recevoir les annonces similaires et les suggestions personnalisées de SeLoger.</Checkbox>
        </div>
        <Button type="primary" className="contact-button">Contacter l'agence</Button>
        <Button className="price-button">Proposer un prix</Button>
      </form>
      <p className="disclaimer">
        En cliquant sur "Contacter l'agence", vous acceptez nos <a href="#">Conditions Générales d'Utilisation</a>.
        Digital Classifieds France procède au traitement de vos données (dont celles relatives à votre navigation sur SeLoger)
        afin de transmettre votre demande au professionnel de l'immobilier que vous souhaitez contacter. Pour en savoir plus et exercer vos droits, <a href="#">cliquez ici</a>.
      </p>
    </div>
  );
};

export default ContactForm;
