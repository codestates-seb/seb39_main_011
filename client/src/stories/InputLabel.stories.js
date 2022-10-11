import InputLabel from "../components/atoms/InputLabel";

export default {
  title: "atoms/Label",
  Component: InputLabel,

  argTypes: {
    id: { control: { type: "text" } },
    children: { control: { type: "text" } },
    type: { control: { type: "text" } },
    icon: { control: { type: "text" } },
  },
};

const Template = (args) => <InputLabel {...args} />;

export const Label = Template.bind({});
