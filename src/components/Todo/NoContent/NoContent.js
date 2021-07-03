import style from './NoContent.module.scss';
import { FrownOutlined } from '@ant-design/icons';

import React from 'react';

const NoContent = () => {
  return (
    <div className={style.container}>
      <div>No items in Todo List</div>
      <div>
        <FrownOutlined style={{ fontSize: 100 }} />
      </div>
    </div>
  );
};

export default NoContent;
