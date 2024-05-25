import React, { useState } from 'react';
import { Tabs, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchPage.css';
import PropertyType from './SearchOptions/PropertyType';
import LocationSearch from './SearchOptions/LocationSearch';
import AlternativeSearch from './SearchOptions/AlternativeSearch';
import AdditionalFilters from './SearchOptions/AdditionalFilters';
import DpeOptions from './SearchOptions/DpeOptions';
import ExteriorOptions from './SearchOptions/ExteriorOptions';
import AnnexesOptions from './SearchOptions/AnnexesOptions';
import ExpositionOptions from './SearchOptions/ExpositionOptions';
import EtageOptions from './SearchOptions/EtageOptions';
import AccessibilityOptions from './SearchOptions/AccessibilityOptions';
import Keywords from './SearchOptions/Keywords';
import AnnonceOptions from './SearchOptions/AnnonceOptions';
import ExactAddress from './SearchOptions/ExactAddress';

const { TabPane } = Tabs;

const SearchPage = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedExterior, setSelectedExterior] = useState([]);
  const [selectedAnnexes, setSelectedAnnexes] = useState([]);
  const [selectedExposition, setSelectedExposition] = useState([]);
  const [selectedEtage, setSelectedEtage] = useState([]);
  const [selectedAccessibility, setSelectedAccessibility] = useState([]);
  const [selectedDpe, setSelectedDpe] = useState([]);
  const [selectedAnnonces, setSelectedAnnonces] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const toggleSelectType = (value, setSelectedState, selectedState) => {
    setSelectedState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleKeywordChange = (value) => {
    setKeywords(value);
  };

  return (
    <div className="search-page">
      <div className="header">
        <h1>Recherche avancée</h1>
      </div>
      <div className="search-wrapper">
        <div className="search-container">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Acheter" key="1">
              <div className="tab-content">
                <PropertyType selectedTypes={selectedTypes} toggleSelectType={(value) => toggleSelectType(value, setSelectedTypes, selectedTypes)} />
                <LocationSearch />
                <AlternativeSearch />
                <AdditionalFilters selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
                <ExteriorOptions selectedExterior={selectedExterior} toggleSelectType={(value) => toggleSelectType(value, setSelectedExterior, selectedExterior)} />
                <AnnexesOptions selectedAnnexes={selectedAnnexes} toggleSelectType={(value) => toggleSelectType(value, setSelectedAnnexes, selectedAnnexes)} />
                <ExpositionOptions selectedExposition={selectedExposition} toggleSelectType={(value) => toggleSelectType(value, setSelectedExposition, selectedExposition)} />
                <EtageOptions selectedEtage={selectedEtage} toggleSelectType={(value) => toggleSelectType(value, setSelectedEtage, selectedEtage)} />
                <AccessibilityOptions selectedAccessibility={selectedAccessibility} toggleSelectType={(value) => toggleSelectType(value, setSelectedAccessibility, selectedAccessibility)} />
                <DpeOptions selectedDpe={selectedDpe} toggleSelectType={(value) => toggleSelectType(value, setSelectedDpe, selectedDpe)} setSelectedDpe={setSelectedDpe} />
                <Keywords keywords={keywords} handleKeywordChange={handleKeywordChange} />
                <AnnonceOptions selectedAnnonces={selectedAnnonces} setSelectedAnnonces={setSelectedAnnonces} />
                <ExactAddress />
              </div>
            </TabPane>
            <TabPane tab="Louer" key="2">
              <div className="tab-content">
                {/* Add content for Louer tab */}
              </div>
            </TabPane>
            <TabPane tab="Construire" key="3">
              <div className="tab-content">
                {/* Add content for Construire tab */}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className="search-button-container">
        <Button type="primary" icon={<SearchOutlined />} size="large">
          Rechercher
        </Button>
        <span className="annonces-count">169 631 annonces</span>
      </div>
    </div>
  );
};

export default SearchPage;
