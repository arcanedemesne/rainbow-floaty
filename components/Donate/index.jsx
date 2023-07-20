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
                  By cash or check payable to Homsted Ministries in-person at any event<br />
                  OR<br />
                  By credit/debit below:<br />
                  <iframe
                    src="https://donorbox.org/embed/rainbow-fl-o-a-t-y"
                    name="donorbox"
                    allowpaymentrequest="allowpaymentrequest"
                    seamless="seamless"
                    frameborder="0"
                    scrolling="no"
                    height="900px"
                    width="400px"
                    style={{ maxWidth: "400px", minWidth: "250px", maxHeight: "none!important"}}
                  />
                </span>
                <br /><br />
                <span>Donation receipts including EIN can be emailed upon request for your tax records.</span>
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