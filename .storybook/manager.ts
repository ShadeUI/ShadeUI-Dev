import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'ShadeUI',
    brandUrl: 'https://shadeui.dev',
    brandImage: 'https://res.cloudinary.com/ddbyncrex/image/upload/w_124,h_32,c_fit/v1750067008/Frame_1_ty0fmg.svg',
    appBg: '#FAFAFA',
    colorPrimary: '#1a1a1a',
    colorSecondary: '#1a1a1a',
  }),
});
