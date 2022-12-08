import StarRender from "../components/atoms/StarRender";

export default {
  title: "atoms/Star",
  Component: StarRender,

  argTypes: {
    width: { control: "text" },
  },
};

const Template = (args) => <StarRender {...args} />;

export const RenderStar = Template.bind({});
