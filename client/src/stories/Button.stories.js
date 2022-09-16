import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
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
