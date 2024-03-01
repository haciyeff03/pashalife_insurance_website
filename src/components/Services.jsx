import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
const text1= ("Ödənişsiz laboratoriyadan istifadə edərək öz səhhətinizlə bağlı məlumatları əldə etmiş olursunuz.")
const text2=("Sağlamlıq testi verərək siz hansı növ həyat sığortaların sizə uyğun olduğunu müəyyən edirsiniz.")
const text3=("Ən əsas müayinələrdən biri olan ürək testi sayəsində sizə bəzi vacib məlumatlar veriləcək.")
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
          Xidmətlərimiz
          </h1>
          <p className=" mt-2 text-center lg:text-start">
           Həm sayt, həmdə mobil aplikasiyadan xidmətlərimizdən yüksək səviyyədə yararlana bilərsiniz.
          </p>
        </div>
      
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Laboratoriya nəticəsi" p={text1}/>
        <ServicesCard icon={icon2} title="Sağlamlıq testi"  p={text2}/>
        <ServicesCard icon={icon3} title="Ürək müayinəsi"p={text3} />
      </div>
    </div>
  );
};

export default Services;
