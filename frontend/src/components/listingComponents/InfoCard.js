import React from 'react';
import { Card } from 'antd';
import { SettingOutlined, CarOutlined, UserOutlined } from '@ant-design/icons';

const InfoCard = ({ icon, title, description, additionalDescription }) => {
  const IconComponent = {
    SettingOutlined: <SettingOutlined />,
    CarOutlined: <CarOutlined />,
    UserOutlined: <UserOutlined />,
  }[icon];

  return (
    <Card className="info-card">
      {IconComponent}
      <p>{title}</p>
      <p>{description}</p>
      {additionalDescription && <p>{additionalDescription}</p>}
    </Card>
  );
};

export default InfoCard;
