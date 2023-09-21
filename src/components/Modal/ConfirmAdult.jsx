import React from 'react'
import adult from "../../assets/adult18.png"

export default function ConfirmAdult({ confirmModal, setConfirmModal }) {
    const handleConfirm =()=>{
        setConfirmModal(false)
        localStorage.setItem("confrimAdult", "yes")
    }
    return (
        <div>

            <input checked={confirmModal} type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img src={adult} alt="" height={200} width={200} className='mx-auto' />
                    <h3 className="font-[600] text-[16px] md:text-[20px] text-lg text-center my-4">Please confirm that you are 18 years of age or older to enter this website.</h3>

                    <div className=" text-center">
                        <button className=" inline-flex items-center bg-[#FB869E] border-0 outline-none hover:opacity-90 rounded-[41px] px-[25px] py-[12px] lg:px-[35px] lg:py-[16px] text-[16px] md:text-[20px] text-[#FFF]  font-[600]" onClick={handleConfirm}>Confirm!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
