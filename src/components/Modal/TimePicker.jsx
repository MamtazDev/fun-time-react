import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
registerLocale("enGB", enGB);
import "react-datepicker/dist/react-datepicker.css";

const TimePicker = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [duration, setDuration] = useState("");

  const handleStartTimeChange = (date) => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

    if (date >= oneHourLater) {
      setStartTime(date);
    } else {
      alert("Please select a time at least 1 hour later from now.");
    }
  };

  const handleEndTimeChange = (date) => {
    const start = new Date(startTime).getTime();
    const end = new Date(date).getTime();

    if (end <= start + 24 * 60 * 60 * 1000) {
      setEndTime(date);
    } else {
      alert("Please select a time within 24 hours of the start time.");
    }
  };

  const calculateDuration = () => {
    if (startTime && endTime) {
      const diff = endTime.getTime() - startTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setDuration(`${hours} hours ${minutes} minutes`);
    }
  };

  useEffect(() => {
    calculateDuration();
  }, [startTime, endTime]);

  return (
    <div>
      <div className="flex justify-center items-center gap-5">
        <DatePicker
          className="p-4"
          selected={startTime}
          onChange={handleStartTimeChange}
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={60}
          timeCaption="time"
          dateFormat="h:mm aa"
          minDate={new Date()}
        />
        <p>to</p>
        <DatePicker
          className="p-4"
          selected={endTime}
          onChange={handleEndTimeChange}
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={60}
          timeCaption="time"
          dateFormat="h:mm aa"
          minDate={startTime}
          filterTime={(time) => {
            const start = new Date(startTime).getTime();
            const end = new Date(time).getTime();
            return end <= start + 24 * 60 * 60 * 1000;
          }}
        />
      </div>
      <p className="text-center text-3xl mt-8">Duration: {duration}</p>
    </div>
  );
};

export default TimePicker;
