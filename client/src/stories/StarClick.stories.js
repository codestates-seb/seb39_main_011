import StarClick from "../components/atoms/StarClick";

export default {
  title: "atoms/Star",
  Component: StarClick,

  argTypes: {
    region: { control: { type: "text" } },
    argTypes: { onClick: { action: "clicked" } },
  },
};

const Template = (args) => <StarClick {...args} />;

export const ClickStar = Template.bind({});
