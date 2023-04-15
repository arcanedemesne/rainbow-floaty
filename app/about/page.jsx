import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Rainbow FL.O.A.T.Y."
        description="What is Rainbow FL.O.A.T.Y.?"
      />
      <About />
    </>
  );
};

export default AboutPage;
