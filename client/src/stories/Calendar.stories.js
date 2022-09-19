import Calendar from "../components/organisms/Calendar/Calendar";

export default {
  title: "organism/Calendar",
  component: Calendar,

  argTypes: {},
};

const Template = (args) => <Calendar {...args} />;

export const SimpleCalendar = Template.bind({});
