import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Center from '../src/components/decorator/Center';

addDecorator(storyFn => <Center>{storyFn()}</Center>);
addDecorator(withInfo({
  inline: true,
  propTablesExclude: [Center]
}));

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'],'Theme' ,'Components', '*', 'WIP'],
    },
  },
};