import RegionSelect from "../components/molecules/RegionSelect";

export default {
  title: "molecules/RegionSelect",
  Component: RegionSelect,

  argTypes: {
    region: { control: { type: "text" } },
  },
};

export const selectRegion = (args) => <RegionSelect {...args}></RegionSelect>;
