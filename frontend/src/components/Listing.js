import React from 'react';
import { Row, Col } from 'antd';
import ListingCard from './listingComponents/ListingCard';
import ContactCard from './listingComponents/ContactCard';
import AdditionalInfo from './listingComponents/AdditionalInfo';
import PriceSection from './listingComponents/PriceSection';
import MortgageCalculator from './listingComponents/MortgageCalculator';
import ContactForm from './listingComponents/ContactForm';
import AgencyInfo from './listingComponents/AgencyInfo';
import SimilarListings from './listingComponents/SimilarListings';
import './Listing.css';

const Listing = () => {
  return (
    <div className="listing-page">
      <Row gutter={16}>
        <Col span={16}>
          <ListingCard />
        </Col>
        <Col span={8}>
          <ContactCard />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <AdditionalInfo />
          <PriceSection />
          <MortgageCalculator />
          <ContactForm />
          <AgencyInfo />
        </Col>
      </Row>
      <SimilarListings />
    </div>
  );
};

export default Listing;
