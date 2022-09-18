import Star from "../components/atoms/Star";

export default {
  title: "atoms/Star",
  Component: Star,

  argTypes: {
    region: { control: { type: "text" } },
  },
};

export const Stars = (args) => <Star {...args}></Star>;
