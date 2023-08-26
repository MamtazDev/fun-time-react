import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCompanion from "./Modal/AddCompanion";

const CompanionBanner = () => {
  const [showAddCompanion, setShowAddCompanion] = useState(false);
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:justify-start  gap-5 py-[50px] border-t-[1px] border-[#000]">
          <button onClick={()=>setShowAddCompanion(true)} className=" bg-[#FB869E] outline-none hover:opacity-90 rounded-[41px] px-[24px] py-[16px] text-[#FBFAF5] text-16 md:text-[20px] font-[700]">
            Add Companion
          </button>

          <Link
            to="/booking"
            className="bg-transparent hover:bg-[#FB869E] hover:text-[#FBFAF5] outline-none hover:opacity-90 border-[1px] border-[#FB869E] rounded-[41px] px-[24px] py-[16px] text-[#FB869E] text-16 md:text-[20px] font-[700]"
          >
            Bookings
          </Link>
        </div>
        <AddCompanion
          showAddCompanion={showAddCompanion}
          setShowAddCompanion={setShowAddCompanion}
        />
      </div>
    </section>
  );
};

export default CompanionBanner;
