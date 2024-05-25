import React from 'react';
import { Checkbox } from 'antd';

const annonceOptions = [
  { label: 'Annonces avec photos', value: 'photos' },
  { label: 'Annonces avec vidéo', value: 'video' },
  { label: 'Annonces avec visite virtuelle', value: 'virtualVisit' },
  { label: 'Exclusivité de l\'agence', value: 'agencyExclusive' },
  { label: 'Dont le prix a évolué', value: 'priceChanged' },
  { label: 'Logement étudiant', value: 'studentHousing' },
];

const AnnonceOptions = ({ selectedAnnonces, setSelectedAnnonces }) => (
  <div>
    <h3>Affichage des annonces</h3>
    <Checkbox.Group options={annonceOptions} value={selectedAnnonces} onChange={setSelectedAnnonces} />
  </div>
);

export default AnnonceOptions;
