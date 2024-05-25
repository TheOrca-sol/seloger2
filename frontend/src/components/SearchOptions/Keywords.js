import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Keywords = ({ keywords, handleKeywordChange }) => (
  <div>
    <h3>Critères par mots-clés</h3>
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="Essayez « Poutres apparentes », « Proche Métro »..."
      onChange={handleKeywordChange}
    >
      {keywords.map((keyword) => (
        <Option key={keyword}>{keyword}</Option>
      ))}
    </Select>
  </div>
);

export default Keywords;
