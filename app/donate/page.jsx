import Donate from "@/components/Donate";
import Breadcrumb from "@/components/Common/Breadcrumb";

const DonatePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Donate to Rainbow FL.O.A.T.Y."
        description="Help us make a difference!"
      />
      <Donate />
    </>
  );
};

export default DonatePage;
