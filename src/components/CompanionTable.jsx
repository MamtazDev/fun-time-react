import React from "react";

const CompanionTable = () => {
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
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <tr key={index}>
                  <td>Min</td>
                  <td>
                  <input type="checkbox" className="toggle toggle-success"  />
                  </td>
                  <td>33</td>
                  <td>Bangkok</td>
                  <td>163CM</td>
                  <td>163CM</td>
                  <td>Curvy</td>
                  <td>Natural</td>
                  <td>1802930293</td>
                  <td>Can</td>
                  <td>Can't</td>
                  <td>2023/04/16</td>
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
