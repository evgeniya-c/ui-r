import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs/react';
import {withSmartKnobs} from 'storybook-addon-smart-knobs'

import {Button} from '../components/Button';

import withThemes from "../themes";

storiesOf('Button', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withThemes([
    {name: "finance", color: "#00bff1", default: true},
    {name: "minfin", color: "#df3014"},
  ]))
  .add('Filled',
    withInfo({
      text: 'Прототип кнопки - имеет все размеры кнопки, но не содержит заливку, обводку и стили для состояний  :hover, :active, :visited. При выборе типа заливки и цветовой схемы получается цветная кнопка.',
    })(() => {
        return (<Button label='Только онлайн заявка' fill='filled' />)
      }
    )
  );