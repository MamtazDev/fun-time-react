import React from "react";
import { Link } from "react-router-dom";

const Authenticated = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-5 py-[91px] text-center">
          <Link
            to="/companions"
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]"
          >
            Companions
          </Link>
          <Link
            to="/booking"
            className="inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]"
          >
            Bookings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Authenticated;
