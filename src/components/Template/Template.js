import style from './Template.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Header from './TemplateHeader';
import Content from './TemplateContent';

const Template = ({ title, headerBottomContent, mainContent }) => {
  return (
    <div className={style.container}>
      <Header title={title} bottomContent={headerBottomContent} />
      <Content>{mainContent}</Content>
    </div>
  );
};

Template.propTypes = {
  title: PropTypes.string.isRequired,
  headerBottomContent: PropTypes.node,
  mainContent: PropTypes.node,
};

export default Template;
