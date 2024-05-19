import html from "../assets/img/html.png";
import css from "../assets/img/css3.png"
import js from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import tcss from "../assets/img/tailwind.png";
import node from "../assets/img/nodejs.png";
import express from "../assets/img/expressjs.png";
import mongo from "../assets/img/mongodb.png";
import ts from "../assets/img/typescript.png";
import python from "../assets/img/python.png";
import C from "../assets/img/c++.svg";
import c from "../assets/img/C.png";
import mysql from "../assets/img/mysql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import linux from "../assets/img/linux.svg";
import ubuntu from "../assets/img/ubuntu.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-left-arrow" onClick={onClick}>
        <img src={arrow1} alt="Left Arrow" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow custom-right-arrow" onClick={onClick}>
        <img src={arrow2} alt="Right Arrow" />
      </button>
    );
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Skills are abilities honed through experience and learning, essential for tasks and success. They encompass diverse areas such as communication, problem-solving, technical proficiency, leadership, adaptability, and creativity, driving personal and professional growth.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />} >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={tcss} alt="Image" />
                  <h5>Tailwaind CSS</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={ts} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={C} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C language</h5>
                </div>
                <div className="item">
                  <img src={linux} alt="Image" />
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <img src={ubuntu} alt="Image" />
                  <h5>Ubuntu</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySql</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
