import React from 'react';
import { Input, Radio, Switch, Checkbox } from 'antd';

const { Group: RadioGroup } = Radio;

const AdditionalFilters = ({ selectedTypes, setSelectedTypes }) => (
  <div className="additional-filters">
    <h3>Pour quel budget ?</h3>
    <div className="budget">
      <Input placeholder="Min" prefix="€" style={{ width: '48%', marginRight: '4%' }} />
      <Input placeholder="Max" prefix="€" style={{ width: '48%' }} />
    </div>
    <h3>Pour quelle surface habitable ?</h3>
    <div className="surface">
      <Input placeholder="Min" suffix="m²" style={{ width: '48%', marginRight: '4%' }} />
      <Input placeholder="Max" suffix="m²" style={{ width: '48%' }} />
    </div>
    <h3>Surface du terrain ?</h3>
    <div className="surface">
      <Input placeholder="Min" suffix="m²" style={{ width: '48%', marginRight: '4%' }} />
      <Input placeholder="Max" suffix="m²" style={{ width: '48%' }} />
    </div>
    <h3>Combien de pièces ?</h3>
    <RadioGroup className="rooms">
      <Radio.Button value="studio">Studio</Radio.Button>
      <Radio.Button value="2">2</Radio.Button>
      <Radio.Button value="3">3</Radio.Button>
      <Radio.Button value="4">4</Radio.Button>
      <Radio.Button value="5">5+</Radio.Button>
    </RadioGroup>
    <h3>Combien de chambres ?</h3>
    <RadioGroup className="rooms">
      <Radio.Button value="1">1</Radio.Button>
      <Radio.Button value="2">2</Radio.Button>
      <Radio.Button value="3">3</Radio.Button>
      <Radio.Button value="4">4</Radio.Button>
      <Radio.Button value="5">5+</Radio.Button>
    </RadioGroup>
    <h3>Plus de critères</h3>
    <Switch checkedChildren="Voir uniquement les biens correspondant à tous mes critères." unCheckedChildren="Voir uniquement les biens correspondant à tous mes critères." />
    <h3>Meublé / Non meublé</h3>
    <Checkbox.Group className="furnished">
      <Checkbox value="meuble">Meublé</Checkbox>
      <Checkbox value="non-meuble">Non meublé</Checkbox>
    </Checkbox.Group>
  </div>
);

export default AdditionalFilters;
