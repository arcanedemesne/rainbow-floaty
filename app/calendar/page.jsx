import Calendar from "@/components/Calendar";
import Breadcrumb from "@/components/Common/Breadcrumb";

const CalendarPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Calendar for Rainbow FL.O.A.T.Y."
        description="Keep up to date and see what's coming soon!"
      />
      
      <Calendar />
    </>
  );
};

export default CalendarPage;
