import Calendar from "@/components/Calendar";
import Breadcrumb from "@/components/Common/Breadcrumb";

const CalendarPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Calendar of events"
        description="Keep up to date and see what's coming soon!"
      />
      <Calendar />
    </>
  );
};

export default CalendarPage;
