import SectionTitle from "../Common/SectionTitle";

const Donate = () => {
  return (
    <>
      <section
        id="donate"
      >
        <div className="container">
          <SectionTitle
            title="Donate to Rainbow FL.O.A.T.Y."
            paragraph={(
              <>
                <span>
                  While we will do our best to make sure that each event pays for itself through participant contributions, we need things like tents and trailers to keep the project running long-term. Your tax deductible donations will help us to provide bigger and better adventures for our participant families.
                </span>
                <br /><br />
                <span>
                  Donations can be made:<br />
                  By check payable to Homsted Ministries with FLOATY in the memo line. Mail checks to PO Box TBD<br />
                  OR<br />
                  By credit/debit at the following link - Donate
                </span>
                <br /><br />
                <span>Donation receipts including EIN can be emailed upon request for your tax records.</span>
                <br /><br />
                <span>A $15/person contribution is requested, but not required for participation</span>
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

export default Donate;