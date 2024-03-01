import React from "react";


const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start mb-10">Bizi yaxından tanıyın</h1>
        <p className=" text-justify lg:text-start">
        Müştərilərimizin maddi rifahını və rahatlığını təmin etmək məqsədilə rahat əldə olunan həyat sığortası və investisiya məhsulları təqdim edirik. İşçilərimizi gördükləri hər işdə dəyərlərimizi yaşatmağa təşviq edirik.
        </p>
        <p className="text-justify lg:text-start">
        Biz həyatımızı dəyişdirən innovasyialardan ilhamlanaraq, gördüyümüz işləri daha da mükəmməlləşdirməyə və müştərilərimizə və digər maraqlı tərəflərimizə maliyyə təhlükəsizliyini təmin etməyə çalışırıq. Bizi həqiqətən motivasiya verən məqsədlərimizdən biri də, MDB-də ilham verən şirkətlərdən biri olmaqdır.
        </p>
        <p className="text-justify lg:text-start">
        Kənardakılar həmişə verdiyimiz məhsulun və ya göstərdiyimiz xidmətin keyfiyyətinə əsasən bizə qiymət verəcək. Və işimizin keyfiyyəti heyətimizin fədakarlığı və peşəkarlığı ilə düz mütənasibdir. Bundan yan keçmək mümkün deyil. 
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg mt-5" src="https://www.davemooreinsurance.com/wp-content/uploads/2022/02/hands-in-hands-protecting-paper-family.jpg" alt="img" />
      </div>
    </div>
  );
};

export default About;
