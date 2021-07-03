import style from './Template.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

const TemplateContent = ({ children }) => {
  return <div className={style.content}>{children}</div>;
};

TemplateContent.propTypes = {
  children: PropTypes.node,
};

export default TemplateContent;
