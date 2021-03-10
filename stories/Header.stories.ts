import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderMenuComponent } from 'web-development-kit';

export default {
  title: 'Example/Header',
  component: HeaderMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderMenuComponent> = (args: HeaderMenuComponent) => ({
  component: HeaderMenuComponent,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {title:'this is the title'};

export const LoggedOut = Template.bind({});
LoggedOut.args = {title:'this is second title'};
