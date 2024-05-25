import React from 'react';
import { Menu } from 'antd';
import { BulbOutlined, HeartOutlined } from '@ant-design/icons';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="SeLoger" className="logo" />
        <button className="announce-button">+ Déposer une annonce</button>
      </div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="acheter">Acheter</Menu.Item>
        <Menu.Item key="louer">Louer</Menu.Item>
        <Menu.Item key="construire">Construire</Menu.Item>
        <Menu.Item key="bureaux">Bureaux & Commerces</Menu.Item>
        <Menu.Item key="emprunter">Emprunter</Menu.Item>
        <Menu.Item key="emménager">Emménager</Menu.Item>
        <Menu.Item key="vendre">Vendre</Menu.Item>
      </Menu>
      <div className="right-menu">
      <span className="right-menu-item">
          <BulbOutlined style={{ marginRight: '5px' }} />
          Recommandations
        </span>
        <span className="right-menu-item">
          <HeartOutlined style={{ marginRight: '5px' }} />
          Mes favoris
        </span>
        <span className="right-menu-item">Créer un compte</span>
        <span className="right-menu-item">Se connecter</span>
      </div>
    </div>
  );
};

export default Navbar;
