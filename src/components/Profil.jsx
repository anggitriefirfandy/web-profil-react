import React from "react";

const Profil = ({ nama, univ, jurusan }) => {
  return (
    <div>
      <div className="card-profil-homepage mb-3 profil-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664777617/WhatsApp_Image_2022-10-03_at_13.12.31_uk87xj.jpg"
              className="img-fluid profil"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-profil ">
              <h1 className="card-title">Halo, <span>saya {nama}</span></h1>
              <p className="card-text">
              Saya seorang mahasiswa di {univ} dengan jurusan {jurusan}
              </p>
              <p className="card-text">
              Saya sedang belajar menjadi web developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
