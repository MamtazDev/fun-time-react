import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
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
                <tr>
                  <td>Min</td>
                  <td>John Appleseed</td>
                  <td>Confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
