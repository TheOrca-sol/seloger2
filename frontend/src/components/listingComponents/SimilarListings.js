import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import './SimilarListings.css';

const similarListingsData = [
  // Add similar listings data here
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Appartement',
    price: '799 000 €',
    details: '5 pièces • 88 m²',
    location: 'Issy-les-Moulineaux',
  },
  // Add more similar listings here...
];

const SimilarListings = () => {
  return (
    <div className="similar-listings" align="center">
      <h2>Annonces similaires</h2>
      <Row gutter={16}>
        {similarListingsData.map((listing) => (
            <>
          <Col span={4} key={listing.id}>
            <Card
              cover={<img alt={listing.title} src={listing.image} />}
              actions={[<Button type="link">Sauvegarder</Button>]}
            >
              <Card.Meta
                title={listing.title}
                description={
                  <>
                    <p>{listing.price}</p>
                    <p>{listing.details}</p>
                    <p>{listing.location}</p>
                  </>
                }
              />
            </Card>
            
          </Col>
          <Col span={4} key={listing.id}>
          <Card
            cover={<img alt={listing.title} src={listing.image} />}
            actions={[<Button type="link">Sauvegarder</Button>]}
          >
            <Card.Meta
              title={listing.title}
              description={
                <>
                  <p>{listing.price}</p>
                  <p>{listing.details}</p>
                  <p>{listing.location}</p>
                </>
              }
            />
          </Card>
          
        </Col>
        <Col span={4} key={listing.id}>
          <Card
            cover={<img alt={listing.title} src={listing.image} />}
            actions={[<Button type="link">Sauvegarder</Button>]}
          >
            <Card.Meta
              title={listing.title}
              description={
                <>
                  <p>{listing.price}</p>
                  <p>{listing.details}</p>
                  <p>{listing.location}</p>
                </>
              }
            />
          </Card>
          
        </Col>
        <Col span={4} key={listing.id}>
          <Card
            cover={<img alt={listing.title} src={listing.image} />}
            actions={[<Button type="link">Sauvegarder</Button>]}
          >
            <Card.Meta
              title={listing.title}
              description={
                <>
                  <p>{listing.price}</p>
                  <p>{listing.details}</p>
                  <p>{listing.location}</p>
                </>
              }
            />
          </Card>
          
        </Col>
        <Col span={4} key={listing.id}>
          <Card
            cover={<img alt={listing.title} src={listing.image} />}
            actions={[<Button type="link">Sauvegarder</Button>]}
          >
            <Card.Meta
              title={listing.title}
              description={
                <>
                  <p>{listing.price}</p>
                  <p>{listing.details}</p>
                  <p>{listing.location}</p>
                </>
              }
            />
          </Card>
          
        </Col>
        <Col span={4} key={listing.id}>
          <Card
            cover={<img alt={listing.title} src={listing.image} />}
            actions={[<Button type="link">Sauvegarder</Button>]}
          >
            <Card.Meta
              title={listing.title}
              description={
                <>
                  <p>{listing.price}</p>
                  <p>{listing.details}</p>
                  <p>{listing.location}</p>
                </>
              }
            />
          </Card>
          
        </Col>
        </>
        ))}
      </Row>
    </div>
  );
};

export default SimilarListings;
