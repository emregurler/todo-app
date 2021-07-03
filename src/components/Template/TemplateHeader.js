import style from './Template.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

const TemplateHeader = ({ title, bottomContent }) => {
  return (
    <div className={style.header}>
      <h1>{title}</h1>
      {bottomContent}
    </div>
  );
};

TemplateHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bottomContent: PropTypes.node,
};

export default TemplateHeader;
