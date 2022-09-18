import DetailTab from "../components/organisms/DetailTab/DetailTab";

export default {
  title: "organism/DetailTab",
  component: DetailTab,

  argTypes: { color: { control: "color" } },
};

export const Tab = (args) => <DetailTab {...args}></DetailTab>;
