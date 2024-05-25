import React from 'react';
import { Button } from 'antd';
import { EnvironmentOutlined, CarOutlined } from '@ant-design/icons';

const AlternativeSearch = () => (
  <div className="alternative-search">
    <h3>Vous pouvez aussi rechercher vos localités autrement</h3>
    <div className="alternative-options">
      <Button icon={<EnvironmentOutlined />} size="large">
        En dessinant sur la carte
      </Button>
      <Button icon={<CarOutlined />} size="large">
        Par temps de trajet
      </Button>
    </div>
  </div>
);

export default AlternativeSearch;
