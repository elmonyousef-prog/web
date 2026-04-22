import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Project One",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project Two",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project Three",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Project Four",
      description: "UI/UX Design",
      imgUrl: projImg4,
    },
    {
      title: "Project Five",
      description: "Web Application",
      imgUrl: projImg5,
    },
    {
      title: "Project Six",
      description: "Full Stack Project",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h2>Projects</h2>

                  <p>
                    A collection of my work and development projects.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="tab1">

                    {/* NAV TABS */}
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="tab1">All Projects</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tab2">Web</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tab3">Design</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tab4">React</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tab5">UI/UX</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tab6">Full Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>

              
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >

                      <Tab.Pane eventKey="tab1">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                   
                      <Tab.Pane eventKey="tab2">
                        <Row>
                          {projects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tab3">
                        <Row>
                          {projects.slice(2, 4).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tab4">
                        <Row>
                          {projects.slice(4, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tab5">
                        <p>UI/UX projects will appear here.</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tab6">
                        <p>Full stack projects will appear here.</p>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>

                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};