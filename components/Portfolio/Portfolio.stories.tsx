import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Portfolio} from './Portfolio';

const meta: Meta<typeof Portfolio> = {
  component: Portfolio,
};

export default meta;

type Story = StoryObj<typeof Portfolio>;

export const Basic: Story = {args: {}};
