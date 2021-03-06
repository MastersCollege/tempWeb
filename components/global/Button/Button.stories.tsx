// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from ".";

//π This default export determines where your story goes in the story list
export default {
  title: "components/Button",
  component: Button,
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  /*π The args you need here will depend on your component */
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  rank: "primary",
  /*π The args you need here will depend on your component */
};
