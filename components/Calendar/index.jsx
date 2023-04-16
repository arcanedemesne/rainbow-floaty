'use client';

import Image from "next/image";

const Calendar = (props) => (
  <section
    id="events"
  >
    <div className="container">
      <Image
        src="/images/calendar/november.png"
        height="1920"
        width="1080"
        alt="november"
        className="w-full"
      />
    </div>
  </section>
);

export default Calendar;