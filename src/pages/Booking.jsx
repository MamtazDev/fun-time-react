import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBookings } from "../api/bookings";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const resData = await getAllBookings();
    if (resData) {
      setBookings(resData);
    }
  };

  console.log(bookings, "ff");

  useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="py-[50px] text-center md:text-start border-t-[1px] border-[#000]">
            <Link
              to="/companions"
              className=" bg-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]"
            >
              Companion
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="tableOuter no-scroll mb-[30px] md:mb-[116px]">
            <table className="w-full text-center">
              <thead className="border-b-[1px] border-[#000]">
                <th>Companions</th>
                <th>Booking By:</th>
                <th>Status:</th>
              </thead>
              <tbody>
                {bookings.length > 0 &&
                  bookings?.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data?.bookedCompanion?.name}</td>
                      <td>{data?.userName}</td>
                      <td>{data?.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
