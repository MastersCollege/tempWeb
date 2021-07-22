// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from ".";

//👇 This default export determines where your story goes in the story list
export default {
  title: "components/Button",
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  /*👇 The args you need here will depend on your component */
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  rank: "primary",
  /*👇 The args you need here will depend on your component */
};
