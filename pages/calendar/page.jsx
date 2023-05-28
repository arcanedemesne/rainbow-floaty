"use client";

import { useState } from "react";
import Calendar from "@/components/Calendar";
import Breadcrumb from "@/components/Common/Breadcrumb";
import DialogModal from "@/components/Common/DialogModal";
import TextField from "@/components/Common/Inputs/TextField";

const key = "W@nd3r1ngFr0g";
const encodedKey = Buffer.from(key).toString('base64');
console.info('encodedKey', encodedKey);

const CalendarPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [isAuthorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState(null);

  const onClose = () => {
    // don't allow this to close
  };

  const handleAuthorize = () => {
    const encodedPassword = Buffer.from(password ?? "").toString('base64');
    if (encodedPassword === encodedKey) {
      setShowModal(false);
      setAuthorized(true);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Calendar of events"
        description="Keep up to date and see what's coming soon!"
      />

      <DialogModal
        open={showModal}
        onClose={onClose}
        title="Authorize to view"
        body={
          <form>
            <TextField
              label={null}
              type={"password"}
              name={"password"}
              placeholder={"Password"}
              onChange={setPassword}
            />
          </form>
        }
        buttons={[
          <button
            key="subscribe-modal-button"
            className="rounded-md bg-primary px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            onClick={handleAuthorize}
          >
            View Calendar
          </button>,
        ]}
      />

      {isAuthorized ? (
        <Calendar />
      ) : (
        <section id="events">
          <div className="container mb-40">
            You must first enter the password to view the contents of this
            calendar.
          </div>
        </section>
      )}
    </>
  );
};

export default CalendarPage;
