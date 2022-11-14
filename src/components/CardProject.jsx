import React from "react";

const CardProject = () => {
  return (
    <div>
      <div className="card mb-3 project-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664778002/porto1_cy4lug.png"
              className="img-fluid project"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-profil ">
              <h5 className="card-title">Pembuatan web pencatat plat nomor</h5>
              <p className="card-text">
              Membuat web untuk mencatat data kendaraan kedalam database, saya
              membuat web ini menggunakan ajax, disini kita bisa menambahkan
              plat nomor baru, mengedit data, melihat data plat nomor, dan
              menghapus data plat nomor
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 project-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664896397/chatbot_qitsfc.png"
              className="img-fluid project"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-profil ">
              <h5 className="card-title">Pembuatan aplikasi destkop chatbot dinamis</h5>
              <p className="card-text">
              Membuat aplikasi destkop yaitu chatbot dinamis yang bisa diajak
              untuk curhat atau mengobrol, bahasa pemrograman yang saya pakai
              menggunakan phyton, saya menerapkan konsep machine learning yaitu
              metode NLP
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 project-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664897571/e_comic_cr8thq.png"
              className="img-fluid project"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-profil ">
              <h5 className="card-title">Pembuatan Website daftar buku komik</h5>
              <p className="card-text">
              Membuat website untuk menampilkan semua data buku komik, disini
              bisa login sebagai admin dan dapat menambahkan data buku, gambar
              dan informasi lainnya, bahasa pemrograman yang saya pakai yaitu
              php
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 project-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1664982477/stok_barang_oea7s8.png"
              className="img-fluid project"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-profil ">
              <h5 className="card-title">Pembuatan aplikasi destkop stok barang gudang</h5>
              <p className="card-text">
              Membuat aplikasi destkop stok gudang, disini saya menggunakan
              bahasa pemrograman java, dan menggunakan database mongodb, lalu
              menggunakan md5 encrypt & decrypt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
