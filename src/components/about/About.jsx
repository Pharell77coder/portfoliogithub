import React from 'react';
import './about.css';
import Image from "../../assets/photo-1.JPG";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">À propos de moi</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about img" />
        <div className="about__data grid">
          <div className="about__info">
          <p className="about__description">
            Je suis Titi Pharell, étudiant à Paris, France. 
            Je suis un passionné de codage informatique et 
            je code depuis 2019.
            J'ai appris python Sql html le css et le Javascript, 
            lors de mon cursus scolaire et Java et React en autodidacte.</p>
          <a href="https://drive.google.com/drive/folders/1riNt38K3F1Ufj-ov-od3xBmWPYXz2PUE?usp=share_link" className="btn">Télécharge mon CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">Python</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
              
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">HTML CSS Javascript</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web"></span>
              </div>
              
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__names">Java</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;