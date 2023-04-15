import Breadcrumb from "@/components/Common/Breadcrumb";
import Events from "../../components/Events"

const EventsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Upcoming Events"
        description="Events coming soon to Rainbow FL.O.A.T.Y!"
      />
      <Events />
    </>
  );
};

export default EventsPage;
