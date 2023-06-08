import Donate from "@/components/Donate";
import Breadcrumb from "@/components/Common/Breadcrumb";

const DonatePage = () => {
  return (
    <div className="pt-0 md:pt-20">
      <Breadcrumb
        pageName="Donate to Rainbow FL.O.A.T.Y."
        description="Help us make a difference!"
      />
      <Donate />
    </div>
  );
};

export default DonatePage;
