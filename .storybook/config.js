import {configure, addDecorator} from '@storybook/react';
import {setDefaults} from '@storybook/addon-info';
import {setOptions} from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

// addon-info
setDefaults({
  header: false,
  inline: true, // Displays info inline vs click button to view
});

// addon-options
setOptions({
  name: 'Ui Kit: Treeum React',
  showAddonPanel: true,
  addonPanelInRight: true,
  hierarchySeparator: null,
  sidebarAnimations: true,
});
