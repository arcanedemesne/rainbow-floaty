import { useState } from "react";
import DialogModal from "../Common/DialogModal";
import TextField from "../Common/Inputs/TextField";

export default ({ show, onClose }) => {
    
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (isFormValid()) {
        // TODO: send to Hōmstêd using Google SpreadSheet API?
        onClose();
    }
  };
  
  const isFormValid = () => {
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return (firstName?.length > 0 && mailformat.test(email?.toLowerCase()));
  };

  return (
    <DialogModal
      open={show}
      onClose={onClose}
      title="Stay up to date!"
      body={
        <form>
          <TextField
            label={null}
            type={"given_name"}
            name={"firstName"}
            placeholder={"Preferred First Name"}
            onChange={setFirstName}
          />
          <TextField
            label={null}
            type={"family_name"}
            name={"lastName"}
            placeholder={"Last Name (optional)"}
            onChange={setLastName}
          />
          <TextField
            label={null}
            type={"email"}
            name={"email"}
            placeholder={"Email Address"}
            onChange={setEmail}
          />
        </form>
      }
      buttons={[
        <button
          key="subscribe-modal-button"
          className="rounded-md bg-primary py-2 px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          style={{
            cursor: !isFormValid() ? "not-allowed" : "pointer",
            opacity: !isFormValid() ? .3 : 1
          }}
          onClick={handleSubscribe}
          disabled={!isFormValid()}
        >
          Subscribe
        </button>,
      ]}
    />
  );
};
