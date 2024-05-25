import React, { useState } from 'react';
import { Button, Select, Checkbox, Card, Row, Col, Modal, Radio } from 'antd';
import { EnvironmentOutlined, BellOutlined } from '@ant-design/icons';
import './SearchResults.css';


import ExteriorOptions from './SearchOptions/ExteriorOptions';
import AnnexesOptions from './SearchOptions/AnnexesOptions';
import ExpositionOptions from './SearchOptions/ExpositionOptions';
import EtageOptions from './SearchOptions/EtageOptions';
import AccessibilityOptions from './SearchOptions/AccessibilityOptions';
import DpeOptions from './SearchOptions/DpeOptions';
import KeywordsOptions from './SearchOptions/Keywords';
import AnnonceOptions from './SearchOptions/AnnonceOptions';

const { Option } = Select;

const propertyData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Maison 2 étages',
    price: '375 000 €',
    pricePerSqM: '3 409 € le m²',
    investLabel: 'Investissez dans un projet locatif',
    details: '5 pièces • 3 chambres • 110 m² • Terrain 408 m² • Garage',
    location: 'Coteaux-Felifeu à Argenteuil (95100)',
    description: 'Maison/Villa à vendre – Venez découvrir chez Stéphane Plaza, dans le secteur recherché des coteaux limite Sannois, un pavillon individuel de 1958 élevé sur sous-sol...',
  },
  // Add more property data here...
];

const SearchResults = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [viewMode, setViewMode] = useState('liste');

  // State for different filters
  const [selectedBudget, setSelectedBudget] = useState([]);
  const [selectedSurface, setSelectedSurface] = useState([]);
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [selectedExterior, setSelectedExterior] = useState([]);
  const [selectedAnnexes, setSelectedAnnexes] = useState([]);
  const [selectedExposition, setSelectedExposition] = useState([]);
  const [selectedEtage, setSelectedEtage] = useState([]);
  const [selectedAccessibility, setSelectedAccessibility] = useState([]);
  const [selectedDpe, setSelectedDpe] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedAnnonces, setSelectedAnnonces] = useState([]);

  const showFilterModal = (type) => {
    setFilterType(type);
    setIsFilterModalVisible(true);
  };

  const handleCancel = () => {
    setIsFilterModalVisible(false);
  };

  const handleViewModeChange = (e) => {
    setViewMode(e.target.value);
  };

  const toggleSelectType = (value, setSelectedState, selectedState) => {
    setSelectedState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const renderFilterComponent = () => {
    switch (filterType) {
    
      case 'Extérieur':
        return <ExteriorOptions selectedExterior={selectedExterior} setSelectedExterior={setSelectedExterior} toggleSelectType={toggleSelectType} />;
      case 'Surfaces annexes':
        return <AnnexesOptions selectedAnnexes={selectedAnnexes} setSelectedAnnexes={setSelectedAnnexes} toggleSelectType={toggleSelectType} />;
      case 'Exposition':
        return <ExpositionOptions selectedExposition={selectedExposition} setSelectedExposition={setSelectedExposition} toggleSelectType={toggleSelectType} />;
      case 'Étage':
        return <EtageOptions selectedEtage={selectedEtage} setSelectedEtage={setSelectedEtage} toggleSelectType={toggleSelectType} />;
      case 'Accessibilité':
        return <AccessibilityOptions selectedAccessibility={selectedAccessibility} setSelectedAccessibility={setSelectedAccessibility} toggleSelectType={toggleSelectType} />;
      case 'DPE':
        return <DpeOptions selectedDpe={selectedDpe} setSelectedDpe={setSelectedDpe} toggleSelectType={toggleSelectType} />;
      case 'Mots-clés':
        return <KeywordsOptions selectedKeywords={selectedKeywords} setSelectedKeywords={setSelectedKeywords} />;
      case 'Affichage des annonces':
        return <AnnonceOptions selectedAnnonces={selectedAnnonces} setSelectedAnnonces={setSelectedAnnonces} />;
      default:
        return null;
    }
  };

  return (
    <div className="results-page">
      <div className="filters-container">
        <div className="filters">
          <Button onClick={() => showFilterModal('Budget')}>Budget</Button>
          <Button onClick={() => showFilterModal('Surfaces')}>Surfaces</Button>
          <Button onClick={() => showFilterModal('Pièces')}>Pièces</Button>
          <Button onClick={() => showFilterModal('Extérieur')}>Extérieur</Button>
          <Button onClick={() => showFilterModal('Surfaces annexes')}>Surfaces annexes</Button>
          <Button onClick={() => showFilterModal('Exposition')}>Exposition</Button>
          <Button onClick={() => showFilterModal('Étage')}>Étage</Button>
          <Button onClick={() => showFilterModal('Accessibilité')}>Accessibilité</Button>
          <Button onClick={() => showFilterModal('DPE')}>DPE</Button>
          <Button onClick={() => showFilterModal('Mots-clés')}>Mots-clés</Button>
          <Button onClick={() => showFilterModal('Affichage des annonces')}>Affichage des annonces</Button>
        </div>
        <Button icon={<BellOutlined />} type="primary">
          Activez l'alerte
        </Button>
      </div>
      <div style={{ marginLeft: '15%' }}>
        <div className="results-summary">
          <h2>10 831 biens à vendre en Île-de-France</h2>
          <div className="view-options">
            <Select defaultValue="Sélection" style={{ width: 120 }}>
              <Option value="selection">Sélection</Option>
            </Select>
          </div>
        </div>
        <div className="view-switch">
          <Radio.Group value={viewMode} onChange={handleViewModeChange} buttonStyle="solid">
            <Radio.Button value="liste">Liste (10 831)</Radio.Button>
            <Radio.Button value="carte">Carte (10 491)</Radio.Button>
          </Radio.Group>
        </div>
        <div className="filter-options">
          <Checkbox defaultChecked>Particuliers (227)</Checkbox>
          <Checkbox defaultChecked>Professionnels (10604)</Checkbox>
        </div>
        <Row gutter={16}>
          <Col span={16}>
            <div className="property-list">
              {propertyData.map((property) => (
                <Card key={property.id} className="property-card">
                  <Row>
                    <Col span={6}>
                      <img src={property.image} alt={property.title} className="property-image" />
                    </Col>
                    <Col span={18}>
                      <div className="property-info">
                        <h3>{property.title}</h3>
                        <h4>{property.price}</h4>
                        <p className="price-per-sqm">{property.pricePerSqM}</p>
                        <p className="invest-label">{property.investLabel}</p>
                        <p className="details">{property.details}</p>
                        <p className="location">{property.location}</p>
                        <p className="description">{property.description}</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>
          <Col span={8}>
            <div className="map-section" align="center">
              <img src="https://via.placeholder.com/200x120" alt="Map placeholder" className="map-placeholder" />
              <Button icon={<EnvironmentOutlined />} type="primary">
                Voir sur la carte
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <Modal
  title={filterType}
  visible={isFilterModalVisible}
  onCancel={handleCancel}
  footer={[
    <Button key="cancel" onClick={handleCancel}>
      Annuler
    </Button>,
    <Button key="apply" type="primary">
      Appliquer
    </Button>,
  ]}
>
  <div className="modal-content">
    {renderFilterComponent()}
  </div>
</Modal>

    </div>
  );
};

export default SearchResults;
