import style from './Template.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Header from './TemplateHeader';
import Content from './TemplateContent';

const Template = ({ className = '', children }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

Template.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Template.Header = Header;
Template.Content = Content;

export default Template;
