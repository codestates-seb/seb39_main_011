import Button from "../components/atoms/Button";

export default {
  title: "atoms/Button",
  component: Button,

  argTypes: {
    color: { control: "color" },
    bgc: { control: "color" },
    width: { control: { type: "text" } },
    height: { control: { type: "text" } },
    padding: { control: { type: "text" } },
    border: { control: { type: "text" } },
    text: { control: "text" },
    hoverbgc: { control: "color" },
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;
