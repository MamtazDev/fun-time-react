import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
registerLocale("enGB", enGB);
import "react-datepicker/dist/react-datepicker.css";

const TimePicker = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTimeOptions, setEndTimeOptions] = useState([]);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [duration, setDuration] = useState("");

  const handleStartTimeChange = (date) => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

    if (date >= oneHourLater) {
      setStartTime(date);
      generateEndTimeOptions(date);
    } else {
      alert("Please select a time at least 1 hour later from now.");
    }
  };

  const generateEndTimeOptions = (start) => {
    const options = [];
    for (let i = 1; i <= 24; i++) {
      const nextHour = new Date(start);
      nextHour.setHours(start.getHours() + i);
      options.push(nextHour);
    }
    setEndTimeOptions(options);
    setSelectedEndTime(options[0]);
  };

  const handleEndTimeChange = (date) => {
    setSelectedEndTime(date);
  };

  const calculateDuration = () => {
    if (startTime && selectedEndTime) {
      const diff = selectedEndTime.getTime() - startTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setDuration(`${hours} hours ${minutes} minutes`);
    }
  };

  useEffect(() => {
    calculateDuration();
  }, [startTime, selectedEndTime]);

  return (
    <div>
      <div className="flex justify-center items-center gap-5">
        <DatePicker
          className="p-4"
          selected={startTime}
          onChange={handleStartTimeChange}
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="h:mm aa"
          minDate={new Date()}
        />
        <p>to</p>
        <DatePicker
          className="p-4"
          selected={selectedEndTime}
          onChange={handleEndTimeChange}
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="h:mm aa"
          minDate={startTime}
          maxDate={endTimeOptions[endTimeOptions.length - 1]}
          includeTimes={endTimeOptions}
        />
      </div>
      <p className="text-center text-3xl mt-8">Duration: {duration}</p>
    </div>
  );
};

export default TimePicker;
