import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <>
      <section
        id="about"
      >
        <div className="container">
          <SectionTitle
            title="About Rainbow FL.O.A.T.Y."
            paragraph={(
              <>
                <span>
                    Rainbow Florida Outdoor Adventures for Trans Youth is a new venture devised by queer parents who love the outdoors - including an Army veteran and former Boy Scout.
                    Our mission is to provide unique and engaging social opportunities for gender diverse kids while helping their families build stronger support networks.
                    We believe that, in these especially trying times in our state, strong communities are more important than ever.
                </span>
                <br /><br />
                <span>
                    Rainbow FL.O.A.T.Y. is sponsored, funded, and administered by <a href="https://homsted.org" rel="nofollow noopener">Hōmstêd Ministries, Inc</a> -
                    a nondogmatic interfaith ministry formed in 2020 to serve the Florida LGBTQIA+ community and recognized by the IRS as a 501(c)(3) public charity.
                    Donations are tax deductible.
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

export default About;