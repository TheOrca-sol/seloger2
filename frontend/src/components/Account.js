import React from 'react';
import { Row, Col, Card } from 'antd';
import { HeartOutlined, BellOutlined, MailOutlined, FolderOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import './Account.css';

const Account = () => {
  const navigate = useNavigate();

  const handleProprietorClick = () => {
    navigate('/my-listings');
  };

  const accountOptions = [
    { title: 'Favoris', description: 'Biens immobiliers enregistrés', icon: <HeartOutlined /> },
    { title: 'Alertes', description: 'Recherches immobilières', icon: <BellOutlined /> },
    { title: 'Abonnements e-mails', description: 'Bons plans, newsletters...', icon: <MailOutlined /> },
    { title: 'Espace locataire', description: 'Profil locataire', icon: <FolderOutlined /> },
    { title: 'Espace propriétaire', description: 'Annonces déposées et contacts', icon: <KeyOutlined />, onClick: handleProprietorClick },
    { title: 'Gérer mon compte', description: 'E-mail, mot de passe', icon: <UserOutlined /> },
  ];

  return (
    <div className="account-page">
      <h1>Mon compte</h1>
      <p>nciri.ayman@gmail.com</p>
      <Row gutter={[16, 16]}>
        {accountOptions.map((option, index) => (
          <Col span={8} key={index}>
            <Card className="account-card" onClick={option.onClick ? option.onClick : undefined}>
              <Card.Meta
                avatar={option.icon}
                title={option.title}
                description={option.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <div className="logout">
        <a href="/logout">Se déconnecter</a>
      </div>
    </div>
  );
};

export default Account;
