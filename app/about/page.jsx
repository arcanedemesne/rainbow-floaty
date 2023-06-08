import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <div className="pt-0 md:pt-20">
      <Breadcrumb
        pageName="About Rainbow FL.O.A.T.Y."
        description="What is Rainbow FL.O.A.T.Y.?"
      />
      <About />
    </div>
  );
};

export default AboutPage;
