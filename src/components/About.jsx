import React from "react";

const About = ({ nama, univ }) => {
  return (
    <div>
      <div className="container-about">
        <div className="gambar">
          <img
            className="profil-about"
            src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664777617/WhatsApp_Image_2022-10-03_at_13.12.31_uk87xj.jpg"
            alt=""
          />
        </div>
        <div className="teks">
          <h1>About me</h1>
          <p>
            Perkenalkan nama saya {nama}, saya dari {univ}, hobi saya adalah
            membaca cerita dan bermain game, saat ini saya sedang mengikuti
            kampus merdeka dengan mitra skilvul, dikampus merdeka ini saya
            mengambil role front end web developer
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
