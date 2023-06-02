'use client';

import Image from "next/image";
import calendarImage from '../../public/images/calendar/november.png';

const Calendar = (props) => (
  <section
    id="events"
  >
    <div className="container">
      <Image
        src={calendarImage}
        height="1920"
        width="1080"
        alt="november"
        className="w-full"
      />
    </div>
  </section>
);

export default Calendar;