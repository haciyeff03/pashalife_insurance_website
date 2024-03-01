import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* First div */}
      <div className="flex flex-col justify-center lg:px-32 px-5 text-black bg-cover opacity-85 w-3/5">
        <div className="space-y-5 mt-10">
          <h1 className="text-5xl font-medium leading-tight text-black">
            Həyat sığortası yaxınlarınızı maliyyə cəhətdən təmin edərək təhlükəsizlik şəbəkəsi yaradır.
          </h1>
          <p>
            Həyat sığortası fərdin ölümü halında ailəsinə maddi dəstək göstərməklə özünü təhlükəsiz hiss etməsinə kömək edir.
            O, həmçinin kritik xəstəliklər və ya daimi əlillik kimi vəziyyətlər üçün əlavə qorunma təmin edir və gözlənilməz
            çətinliklərə qarşı maliyyə qalxanı yaradır.
          </p>
          <Button title="Xidmətlərimiz  " />
        </div>
      </div>

      {/* Second div with image */}
      <div className="mt-100 border-radius-20 salam" style={{ marginTop: "130px" }}>   
     
         <img
         
          src="https://img-new.cgtrader.com/items/3341507/4c8f15ba32/large/fingerprint-v2-004-3d-model-low-poly-max-obj-fbx-ma-stl-dwg.jpg"
          alt=""
          width="450px"
          height="450px"
          style={{ transform: "rotate(180deg)" }}

        />
      </div>
    </div>
  );
};

export default Home;
