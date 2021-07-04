import style from './Template.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

const TemplateHeader = ({ title, children }) => {
  return (
    <div className={style.header}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

TemplateHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default TemplateHeader;
