import React from "react";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div>
      <About
        nama={"Anggit rief irfandy"}
        univ={"Politeknik harapan bersama tegal"}
      />
      <div className="skill">
        <div>
          <h1>My skill</h1>
          <h2>Bahasa Yang telah saya pelajari</h2>
          <ul>
            <li className="bhs">PHP</li>
            <i className="bx bxl-php"></i>
            <li className="bhs">Javascript</li>
            <li className="bhs">Java</li>
            <li className="bhs">Phyton</li>
          </ul>
        </div>
        <div>
          <h2>My Achievement</h2>
          <ul>
            <li className="bhs">
              Oracle AWARD if COURSE COMPLETION Java Fundamentals
            </li>
            <li className="bhs">
              Oracle AWARD of COURSE COMPLETION Java Programming
            </li>
            <li className="bhs">
              Oracle AWARD if COURSE COMPLETION Database Design
            </li>
            <li className="bhs">
              Oracle AWARD if COURSE COMPLETION Database Programming with PL/SQL
            </li>
            <li className="bhs">Huawei HCIA-IoT Course</li>
          </ul>
        </div>
      </div>
      <br></br>
    </div>
  );
};
export default AboutPage;
