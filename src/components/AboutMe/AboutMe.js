import React from "react";
import myPic from "../../assets/imgs/aboutPic.jpg";
import "./AboutMe.scss"
const AboutMe = () => {
  return (
    <div className="aboutContainer">
      <div className="subHeader neonText2">AboutMe</div>
      <div className="dataContainer">
        <div className="leftContainer">
          <img src={myPic} alt="raj's img" className="aboutImg" />
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>
        <div className="rightContainer">
          <h3>My name is Raj Patel.</h3>
          <table>
            <tr>
              <td>Age</td>
              <td>22</td>
            </tr>

            <tr>
              <td>Education</td>
              <td>MSc Information Technology</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>Indian</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Gujarati, Hindi, English</td>
            </tr>
            <tr>
              <td>Addess</td>
              <td>Surat, Gujarat, India</td>
            </tr>
            <tr>
              <td>Freelance</td>
              <td>Available</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
