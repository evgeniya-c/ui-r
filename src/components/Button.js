import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, label, color, fill, size, disabled}) => {
  let className = `trm-btn`;
  if (fill) {
    className += ` trm-btn--${fill}`;
    if (!color || color !== 'primary') className += ` trm-${color}`;
    if (!size || size !== 'md') className += ` trm-${size}`;
  }

  return (
    <button type={type} className={className} disabled={disabled}>
      {label}
    </button>
  )
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'search']),
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  fill: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  disabled: false
};

export {Button};