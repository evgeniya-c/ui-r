import React from 'react';
import PropTypes from 'prop-types';

import addons from '@storybook/addons';

import financeTheme from 'uikit/assets/scss/theme.finance.scss';
import minfinTheme from 'uikit/assets/scss/theme.minfin.scss';

export class ThemeDecorator extends React.Component {
  constructor(props) {
    super(props);

    const { channel, story } = props;

    // A channel is explicitly passed in for testing
    if (channel) {
      this.channel = channel;
    } else {
      this.channel = addons.getChannel();
    }

    this.state = { background: 'transparent' };

    this.story = story();

    this.themes = { 'finance': financeTheme, 'minfin': minfinTheme };
  }

  componentWillMount() {
    this.channel.on('theme', this.setTheme);
    this.channel.emit('theme-set', this.props.themes);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.story = nextProps.story();
    }
  }

  componentWillUnmount() {
    this.channel.removeListener('theme', this.setTheme);
    this.channel.emit('theme-unset');
  }

  setTheme = theme => this.setState({ theme });

  render() {
    const themes = this.state.theme;
    if(themes && themes.name === 'finance') {
      financeTheme.use();
      minfinTheme.unuse();
    } else {
      financeTheme.unuse();
      minfinTheme.use();
    }

    return this.story;
  }
}
ThemeDecorator.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.object),
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }),
  story: PropTypes.func.isRequired,
};
ThemeDecorator.defaultProps = {
  themes: [],
  channel: undefined,
};

export default themes => story => (
  <ThemeDecorator story={story} themes={themes} />
);