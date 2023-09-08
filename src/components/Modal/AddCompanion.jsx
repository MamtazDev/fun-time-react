import React from "react";

const AddCompanion = ({ showAddCompanion, setShowAddCompanion }) => {
  return (
    <>
      <input
        checked={showAddCompanion}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box max-w-[443px] p-0">
          <div className="px-[47px] py-[55px]">
            <div className="flex flex-wrap justify-between">
              <p className="text-[#504949] text-[18px] lg:font-[25px] font-[600] text-center mb-[20px]">
                Add Companion
              </p>
              <button
                onClick={() => setShowAddCompanion(false)}
                className="signUpCross btn btn-sm btn-circle btn-ghost  text-[#FB869E]"
              >
                ✕
              </button>
            </div>
            <form action="">
              <label className="block">
                <select className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]">
                  <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="ladyboy">Ladyboy</option>
                </select>
              </label>
              <label className="block">
                <select className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]">
                  <option>City</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Chiangmai">Chiangmai</option>
                  <option value="dannok">Dan Nok</option>
                  <option value="hadyai">Had Yai</option>
                  <option value="krabi">Krabi</option>
                  <option value="pattaya">Pattaya</option>
                  <option value="phuket">Phuket</option>
                </select>
              </label>
              <label className="block">
                <input
                  type="text"
                  name="name"
                  className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Name"
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  name="phone"
                  className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Phone Number"
                />
              </label>
              <label className="block">
                <input
                  type="number"
                  name="age"
                  className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Age"
                  max="100"
                  min="0"
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  name="height"
                  className="px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Height"
                />
              </label>
              <label className="block">
                <select className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]">
                  <option>Body Type</option>
                  <option value="slim">Slim</option>
                  <option value="athletic">Athletic</option>
                  <option value="curvy">Curvy</option>
                </select>
              </label>
              <label className="block">
                <input
                  type="text"
                  name="measurement"
                  className="px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Measurement"
                />
              </label>
              <label className="block">
                <select className="px-4 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full sm:text-sm  text-[rgba(0, 0, 0, 0.30)] mb-[20px]">
                  <option>Boob Type</option>
                  <option value="silicon">Silicon</option>
                  <option value="natural">Natural</option>
                </select>
              </label>
              <label className="block">
                <input
                  type="text"
                  name="do"
                  className="px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Can"
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  name="dont"
                  className="px-3 py-2 bg-white border-[.5px] rounded-[5px] border-[#686868]  outline-none block w-full  sm:text-sm text-[rgba(0, 0, 0, 0.30)] mb-[20px]"
                  placeholder="Can't"
                />
              </label>
              <label className="block text-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[10px] text-[#FFF] text-[20px] md:text-[25px] font-[400] lg:font-[800]  w-full mb-[20px]">
                Upload Photos
                <input type="file" className="hidden mb-[20px]" />
              </label>
              <button
                className="whitespace-nowrap bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[5px] px-[10px] py-[10px] text-[#FFF] text-[20px] md:text-[25px] font-[400] lg:font-[800]  w-full"
                type="submit"
              >
                Add Companion
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompanion;
