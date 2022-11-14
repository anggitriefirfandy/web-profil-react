import React from "react";
import CardProject from "../components/CardProject";
import Profil from "../components/Profil";

const HomePage = () => {
  return (
    <div>
      <Profil
        nama={"Anggit rief irfandy"}
        univ={"Politeknik Harapan Bersama Tegal"}
        jurusan={"Teknik Informatika"}
      />
      <CardProject />
    </div>
  );
};
export default HomePage;
