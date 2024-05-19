import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import epr from "../assets/img/epr.png";
import note from "../assets/img/note.png";
import todo from "../assets/img/todo.png";
import guess from "../assets/img/guess.png";
import url from "../assets/img/url.png";
import netflix from "../assets/img/netflix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sticky Note Application",
      description: "Sticky Notes Application using HTML,CSS and Javascript.",
      imgUrl: note,
    },
    {
      title: "Netflix Clone App",
      description: "Design & Development",
      imgUrl: netflix,
    },
    {
      title: "Electronic Patient Record System",
      description: "Desktop application for storing patient's records digitally, entirely built with web development using python and sqlite3 database.",
      imgUrl: epr,
    },
    {
      title: "Todo App",
      description: "A simple responsive Todo App using Vite reactjs and tailwind css by using local storage to store the data with key features of CRUD operations and Toggle complete.",
      imgUrl: todo,
    },
    {
      title: "Url Shortener",
      description: "A URL shortener built entirely with Node.js,MongoDB and EJS! 🌐",
      imgUrl: url,
    },
    {
      title: "Guess The Number",
      description: "This project employs HTML, CSS, and JavaScript to create an engaging user interface and implement the game logic.",
      imgUrl: guess,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects are endeavors undertaken to achieve specific goals. They can vary widely, from building software applications and constructing infrastructure to conducting research and organizing events. Regardless of the field, successful projects require clear objectives, effective planning, efficient execution, and thorough evaluation to ensure desired outcomes are achieved.</p>
                <p>These are some of my projects listed below:-</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Many More to come...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Many more to come...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
