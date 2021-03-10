// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { TestComponent } from 'web-development-kit';

export default {
  title: 'Example/test',
  component: TestComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  props: args,
});

export const Primary = Template.bind({});

