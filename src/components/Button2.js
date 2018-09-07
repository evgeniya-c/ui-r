import React from 'react';
import PropTypes from 'prop-types';

class Button2 extends React.Component {
  render() {
    if(this.props.project === 'minfin') {
      require('../red.css');
    }

    return (
      <button
      type={this.props.type ? this.props.type:'button'}
      className={'trm-btn2' + (this.props.view ? ' trm-btn2--'+this.props.view:'') + (this.props.theme ? ' trm-'+this.props.theme:'') }
      disabled={this.props.disabled}
    >
      {this.props.label}
    </button>
    );
  }
}

Button2.propTypes = {
  type: PropTypes.oneOf(['button','reset', 'search']),
  label: PropTypes.string,
  project: PropTypes.oneOf(['finance','minfin']),
  theme: PropTypes.oneOf(['primary','secondary']),
  view: PropTypes.oneOf(['filled','outlined']),
  disabled: PropTypes.bool
};

Button2.defaultProps = {
  type: 'button',
  project: 'finance',
  disabled: false
};

export {Button2};