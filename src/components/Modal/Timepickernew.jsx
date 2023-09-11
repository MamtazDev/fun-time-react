import React, { useEffect, useState } from "react";

const Timepickernew = () => {
  const [time, setTime] = useState(2);
  const [clock, setClock] = useState();
  const [minutesToAdd, setMinutesToAdd] = useState(0);
  const [title, setTitle] = useState("Today");

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() + minutesToAdd);
      const hour = date.getHours();
      const minute = date.getMinutes();
      const amPm = hour >= 12 ? "PM" : "AM";
      const formattedTime = `${hour % 12 || 12}:${minute
        .toString()
        .padStart(2, "0")} ${amPm}`;
      setClock(formattedTime);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, [minutesToAdd]);

  const handleTimeChange = (increment) => {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the new date and time after adding the increment
    const newDate = new Date(currentDate);
    newDate.setMinutes(currentDate.getMinutes() + minutesToAdd + increment);

    // Calculate the difference in hours between the new and current time
    const hourDifference = (newDate - currentDate) / (1000 * 60 * 60);

    // Check if the selected time is at least 1 hour later than the current time
    if (hourDifference >= 1) {
      setMinutesToAdd(minutesToAdd + increment);

      // Check if the selected time is on the same day or the next day
      if (hourDifference >= 24) {
        setTitle("Tomorrow");
      } else {
        setTitle("Today");
      }
    }
  };

  const handleIncrement = () => {
    if (time < 24) {
      setTime(time + 1);
    }
  };

  const handleDecrement = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };
  return (
    <div>
      <p className="text-[25px] md:text-[45px] text-[#000] font-[700] mb-6 text-center">
        {title}
      </p>
      <p className="text-3xl text-center font-bold mb-5">{clock}</p>
      <div className="flex items-center justify-center gap-2 mb-2">
        <button className="border px-3" onClick={() => handleTimeChange(-15)}>
          -
        </button>
        <p>15m</p>
        <button className="border px-3" onClick={() => handleTimeChange(15)}>
          +
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 mb-2">
        <button className="border px-3" onClick={() => handleTimeChange(-60)}>
          -
        </button>
        <p>1h</p>
        <button className="border px-3" onClick={() => handleTimeChange(60)}>
          +
        </button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="border px-3" onClick={() => handleTimeChange(-240)}>
          -
        </button>
        <p>4h</p>
        <button className="border px-3" onClick={() => handleTimeChange(240)}>
          +
        </button>
      </div>

      <div className="pb-[25px] pt-[25px]">
        <h2 className="text-xl text-[#000] font-[400] mb-[35px] text-center">
          Duration
        </h2>

        <div className="border border-black bg-gray-100 p-[2px] w-full h-[20px] rounded-md">
          <div
            className="bg-pink-600 rounded-md h-full text-[9px]  text-white px-2 py-auto"
            style={{ width: `${(time / 24) * 100}%` }}
          >
            {time}h
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <p
            onClick={handleDecrement}
            className="text-[40px] md:text-[70px] text-[#000] font-[400] cursor-pointer"
          >
            -
          </p>
          <p className="text-[40px] md:text-[70px] text-[#000] font-[400]">
            {time}H
          </p>
          <p
            onClick={handleIncrement}
            className="text-[40px] md:text-[70px] text-[#000] font-[400] cursor-pointer"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timepickernew;
