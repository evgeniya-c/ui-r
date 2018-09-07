import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, label, theme, view, disabled}) => (
    <button
        type={type ? type:'button'}
        className={'trm-btn' + (view ? ' trm-btn--'+view:'') + (theme ? ' trm-'+theme:'') }
        disabled={disabled}
    >
        {label}
    </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button','reset', 'search']),
  label: PropTypes.string,
  theme: PropTypes.oneOf(['primary','secondary']),
  view: PropTypes.oneOf(['filled','outlined']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  disabled: false
};

export {Button};