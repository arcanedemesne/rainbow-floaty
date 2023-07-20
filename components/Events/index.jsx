import SectionTitle from "../Common/SectionTitle";

const Events = () => {
  return (
    <>
      <section
        id="events"
      >
        <div className="container">
          <SectionTitle
            title="Upcoming Events at Rainbow FL.O.A.T.Y."
            paragraph={(
              <span className="flex flex-row">
                <span className="sm:flex-row lg:basis-1/2">
                  <span>
                    Rainbow FL.O.A.T.Y. is planning our first official Adventure for Fall 2023 at Highlands Hammock State Park.
                    This overnight camping event - open to families with children aged 7-17 - is intended to provide a structured social experience for trans and gender non-conforming youth as well as peer support for their families.
                    Activities will include a boardwalk nature hike through the cypress swamp, games, and campfire stories/skits.
                    All meals will be provided (with consideration given to dietary restrictions) and tents will be made available to those who cannot bring their own.
                    We hope that the families in attendance will leave with great memories, a bolstered support system, and new life-long friends.
                  </span>
                  <br /><br />
                  <span>A $15/person contribution is requested, but not required for participation.</span>
                </span>
                <span className="sm:basis-0 lg:basis-1/2 ml-20 bg-[url('/images/events/highlands-hammock.jpg')]" style={{height: 385}} />
              </span>
            )}
            width={"100%"}
            left
          />
        </div>
      </section>
    </>
  );
};

export default Events;
