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
    radius: { control: { type: "text" } },
    fontSize: { control: { type: "text" } },
    fontWeight: { control: { type: "text" } },
    onClick: { action: "clicked" },
  },
};

export const StorybookButton = (args) => <Button {...args} />;
