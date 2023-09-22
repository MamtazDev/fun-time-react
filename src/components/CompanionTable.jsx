import React from "react";
import { dateFormater } from "./utils";
import { deleteCompanion } from "../api/companion";

const CompanionTable = ({ companions, allCompanion }) => {
  const handleDelete = async (id) => {
    if (window.confirm("Are you really want to delete this companion?")) {
      const resData = await deleteCompanion(id)
      if (resData) {
        allCompanion()
      }
    }
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="tableOuter no-scroll pb-[30px] md:pb-[116px]">
          <table className="w-full text-center">
            <thead className="border-b-[1px] border-[#000]">
              <th>Name</th>
              <th>Online</th>
              <th>Age</th>
              <th>City</th>
              <th>Height</th>
              <th>Measurement</th>
              <th>Body Type</th>
              <th>Boob Type</th>
              <th>Phone</th>
              <th>Can</th>
              <th>Can't</th>
              <th>Joined</th>
              <th>Action</th>
            </thead>
            <tbody>
              {companions.length > 0 &&
                companions?.map((companion, index) => (
                  <tr key={index}>
                    <td>{companion.name}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-success"
                      />
                    </td>
                    <td>{companion.age}</td>
                    <td>{companion.city}</td>
                    <td>{companion.height}</td>
                    <td>{companion.measurement}</td>
                    <td>{companion.bodyType}</td>
                    <td>{companion.boobType}</td>
                    <td>{companion.phone}</td>
                    <td>{companion.can}</td>
                    <td>{companion.cant}</td>
                    <td>{dateFormater(companion.createdAt)}</td>
                    <td>
                      <button className="bg-[#FB869E] text-white text-[12px] px-[4px] rounded-[10px]" onClick={() => handleDelete(companion?._id)}>Remove</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompanionTable;
