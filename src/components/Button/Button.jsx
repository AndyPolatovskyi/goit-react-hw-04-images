import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = props => {
  return (
    <button type="button" onClick={props.onClick} className={css.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};