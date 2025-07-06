import React from "react";
import Title from "../component/Title";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
    <div className="w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]">
      <Title text1={"CONTACT"} text2={"US"} />
      <div className="w-[100%]  flex  gap-[30px] items-center justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex  items-center justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7271577.629247063!2d80.85930415!3d27.13819275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1751785921203!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]">
          <p className="lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]">
            Our Store
          </p>
          <div className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            <p>250002 Meerut Cantt</p>
            <p>Meerut , Uttar Pradesh , India</p>
          </div>
          <div className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            <p>tel: +91 6397105488</p>
            <p>Email: deepanshulavania69@gmail.com</p>
          </div>
          <p className="lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold">
            Careers at OneCart
          </p>
          <p className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            Learn more about our teams and job openings
          </p>
          <button className="px-[30px] py-[20px] flex items-center justify-center text-[white] bg-transparent border active:bg-slate-600 rounded-md">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
}

export default Contact;
