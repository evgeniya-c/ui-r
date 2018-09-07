import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs/react';

import {Button} from '../components/Button';
import {Button2} from "../components/Button2";


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Prototype',
    withInfo({
      text: 'Прототип кнопки - имеет все размеры кнопки, но не содержит заливку, обводку и стили для состояний  :hover, :active, :visited.',
    })(() => <Button label='Button'/>))
  .add('Filled',
    withInfo({
      text: 'Кнопка с заливкой',
    })(() => {
        const label = 'Заявка онлайн';
        const theme = {
          primary: 'primary',
          secondary: 'secondary'
        };

        const view = {
          filled: 'filled',
          outlined: 'outlined'
        };

        return (<Button
          label={text('Label', label)}
          theme={select('Theme', theme, theme.primary)}
          view={select('View', view, view.filled)}
          disabled={boolean('Disabled', false)}
        />)
      }
    )
  );

storiesOf('Button2', module)
  .add('hohoho',
    withInfo({
      text: 'Кнопка с заливкой',
    })(() => {
        const label = 'Заявка онлайн';
        const theme = {
          primary: 'primary',
          secondary: 'secondary'
        };

        const view = {
          filled: 'filled',
          outlined: 'outlined'
        };

        const project = {
          finance: 'finance',
          minfin: 'minfin'
        };

        return (<Button2
          label={text('Label', label)}
          theme={select('Theme', theme, theme.primary)}
          view={select('View', view, view.filled)}
          disabled={boolean('Disabled', false)}
          project={select('Project', project, project.finance)}
        />)
      }
    )
  );