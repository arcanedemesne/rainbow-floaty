import Breadcrumb from "@/components/Common/Breadcrumb";
import Events from "../../components/Events"

const EventsPage = () => {
  return (
    <div className="pt-0 md:pt-20">
      <Breadcrumb
        pageName="Upcoming Events"
        description="Events coming soon to Rainbow FL.O.A.T.Y!"
      />
      <Events />
    </div>
  );
};

export default EventsPage;
