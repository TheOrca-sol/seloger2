import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const PhotosStep = () => {
  return (
    <div>
      <h2>Ajoutez des photos de votre bien</h2>
      <Form.Item name="photos">
        <Upload>
          <Button icon={<UploadOutlined />}>Télécharger des photos</Button>
        </Upload>
      </Form.Item>
    </div>
  );
};

export default PhotosStep;
