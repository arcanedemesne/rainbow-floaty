import SectionTitle from "../Common/SectionTitle";

const Partner = () => {
  return (
    <>
      <section
        id="partner"
      >
        <div className="container">
          <SectionTitle
            title="Partner with Rainbow FL.O.A.T.Y."
            paragraph={(
              <>
                <span>
                    Do you or your organization work with gender diverse youth? We’d love to work with you!
                </span>
                <br /><br />
                <span>
                    Rainbow FL.O.A.T.Y. is looking to form partnerships with LGBTQIA+ organization across Florida and develop programs specially tailored to serve your unique communities.
                </span>
                <br /><br />
                <span>
                Reach out to us at <a href="mailto:partner@rainbowfloaty.com">Partner@RainbowFloaty.com</a> for more information.
                </span>
              </>
            )}
            width={"100%"}
            left
          />
        </div>
      </section>
    </>
  );
};

export default Partner;