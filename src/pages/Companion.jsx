import CompanionTable from "../components/CompanionTable";
import CompanionBanner from "../components/CompanionBanner";
import { getAllCompanions } from "../api/companion";
import { useEffect, useState } from "react";

const Companion = () => {
  const [companions, setCompanions] = useState([]);
  const allCompanion = async () => {
    const resData = await getAllCompanions();
    setCompanions(resData);
  };

  useEffect(() => {
    allCompanion();
  }, []);
  return (
    <div>
      <CompanionBanner allCompanion={allCompanion} />
      <CompanionTable companions={companions} />
    </div>
  );
};

export default Companion;
