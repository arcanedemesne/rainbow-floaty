import Volunteer from "@/components/Volunteer";
import Breadcrumb from "@/components/Common/Breadcrumb";

const VolunteerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Volunteer for Rainbow FL.O.A.T.Y."
        description="Make a difference with us!"
      />
      <Volunteer />
    </>
  );
};

export default VolunteerPage;
