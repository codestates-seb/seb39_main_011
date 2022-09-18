import DetailTab from "../components/organisms/DetailTab/DetailTab";

export default {
  title: "organism/DetailTab",
  component: DetailTab,

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

export const Tab = (args) => <DetailTab {...args}></DetailTab>;
