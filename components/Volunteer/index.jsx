import SectionTitle from "../Common/SectionTitle";

const Volunteer = () => {
  return (
    <>
      <section
        id="volunteer"
      >
        <div className="container">
          <SectionTitle
            title="Volunteer for Rainbow FL.O.A.T.Y."
            paragraph={(
              <>
                <span>
                  Want to get involved?
                </span>
                <br /><br />
                <span>
                  We’re looking for a few passionate individuals to act as our first “Adventure Guides.”
                  Ideal candidates would be 18+ and have a passion for the LGBTQIA+ community as well as some experience with primitive camping, first aid, hiking, and/or wilderness survival.
                </span>
                <br /><br />
                <span>
                  Keep checking back for more volunteer opportunities as we grow!
                </span>
                <br /><br />
                <span className="w-full">
                <button
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    <a href="mailto:info@rainbowfloaty.com">
                      Contact<br />
                      <sub>send us an email</sub>
                    </a>
                  </button>
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

export default Volunteer;