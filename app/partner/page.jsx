import Partner from "@/components/Partner";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PartnerPage = () => {
  return (
    <div className="pt-0 md:pt-20">
      <Breadcrumb
        pageName="Partner with Rainbow FL.O.A.T.Y."
        description="Join forces with us!"
      />
      <Partner />
    </div>
  );
};

export default PartnerPage;
