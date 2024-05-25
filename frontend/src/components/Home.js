import React, { useState } from 'react';
import { Tabs, Input, Button, Checkbox } from 'antd';

import './home.css';

const { TabPane } = Tabs;

const Home = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className='home'>
      <div className="content">
        <h2>Quel est votre projet ?</h2>
        <Tabs defaultActiveKey="1" onChange={handleTabChange} className="custom-tabs">
          <TabPane tab="Louer" key="1">
            <div className="search-form">
              <Input placeholder="Dans quelle ville ? Quartier ?" style={{ marginBottom: '10px' }} />
              <Input placeholder="Votre budget max ?" style={{ marginBottom: '10px' }} />
              <div className="filters">
                <Checkbox style={{ marginRight: '10px' }}>Maison</Checkbox>
                <Checkbox style={{ marginRight: '10px' }}>Appartement</Checkbox>
                <Button style={{ marginRight: '10px' }}>+</Button>
              </div>
              <a href="#" className="advanced-search">Recherche avancée</a>
              <a href="#" className="owner-link">Propriétaire ? Déposez votre annonce</a>
              <Button type="primary" style={{ marginTop: '10px' }}>Rechercher</Button>
            </div>
          </TabPane>
          <TabPane tab="Acheter" key="2">
            <div className="search-form">
              <Input placeholder="Ville ou code postal" style={{ marginBottom: '10px' }} />
              <Input placeholder="Budget max" style={{ marginBottom: '10px' }} />
              <div className="filters">
                <Checkbox style={{ marginRight: '10px' }}>Terrain</Checkbox>
                <Checkbox style={{ marginRight: '10px' }}>Maison</Checkbox>
                <Checkbox style={{ marginRight: '10px' }}>Appartement</Checkbox>
              </div>
              <Button type="primary" style={{ marginTop: '10px' }}>Rechercher</Button>
            </div>
          </TabPane>
          <TabPane tab="Estimer" key="3">
            <div className="search-form">
              <Input placeholder="Adresse du bien" style={{ marginBottom: '10px' }} />
              <Button type="primary" style={{ marginTop: '10px' }}>Estimer</Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
