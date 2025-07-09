import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import fswfoods from "../assets/projects/fswfoods.png";
import exclusive from "../assets/projects/exclusive.jpg";
import blen from "../assets/projects/blen.jpg";
import eurocolchoes from "../assets/projects/eurocolchoes.jpg";
import barber from "../assets/projects/barber.jpg";
import devfinance from "../assets/projects/devfinance.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blen}
              isBlog={false}
              title="Agency blen."
              description="blen. is a marketing and branding agency founded in 2025. I developed a clean and modern landing page designed to showcase the brand’s identity and attract potential clients through a newsletter sign-up form.
              The platform was built from scratch using pure HTML, CSS, and JavaScript, with a focus on performance, responsiveness, and visual clarity.
              I continue to maintain and update the project, as blen. is part of my own business venture."
              ghLink="https://github.com/Givemechandon/blen"
              demoLink="https://givemechandon.github.io/blen/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exclusive}
              isBlog={false}
              title="Exclusive ERP"
              description="Exclusive ERP is a management system currently in development, tailored to the specific needs of beauty salons. This project is part of my own business and aims to simplify daily operations through smart, intuitive solutions. Built using HTML, CSS, JavaScript, and Artificial Intelligence, the system offers: Appointment scheduling, Dashboard with key monthly insights, Client, service, and pricing lookup, Invoice tracking and service history."
              ghLink="https://github.com/Givemechandon/exclusive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barber}
              isBlog={false}
              title="Barber Project"
              description="Barber Project was originally developed as a custom landing page for Vavá Barber, a barbershop located in Jundiaí-SP, Brazil. The goal was to create a modern and engaging website to showcase services, pricing, and the barbershop's identity.
              The landing page was built using HTML, CSS, SCSS, and JavaScript, with a focus on responsiveness and performance. Although fully functional, the project was not launched, as the team later chose to proceed with a WordPress-based website, which is the brand’s current online presence."
              ghLink="https://github.com/Givemechandon/barber-shop"
              demoLink="https://barber-shop-6umj3qhqd-brunos-projects-015c6abc.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fswfoods}
              isBlog={false}
              title="FSW Foods"
              description="FSW is a personal project created as a functional replica of a McDonald's kiosk, designed to test and improve my technical skills.
              Built using Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, and a database managed with Prisma Studio, the project leveraged modern technologies within the React ecosystem.
              Although it was not deployed in production, FSW served as a valuable exercise to deepen my understanding of front-end, back-end, and database integration."
              ghLink="https://github.com/Givemechandon/Fullstackweek-Donalds"
              demoLink="https://fullstackweek-donalds-umber.vercel.app/fsw-donalds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eurocolchoes}
              isBlog={false}
              title="Euro Colchões"
              description="I collaborated on the development of Euro Colchões’ website, using VTEX IO and Deco.cx (low code), along with HTML, CSS, JavaScript, and some PHP. I worked alongside a senior developer to deliver a functional and customized platform for the company.
              My main contribution was on the front-end, particularly in creating and customizing the product pages, ensuring better usability and a visual style aligned with the brand identity. The project focused on performance and responsiveness, meeting the e-commerce’s needs."
              ghLink="https://github.com/Givemechandon/Euroflex-website"
              demoLink="https://www.eurocolchoes.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devfinance}
              isBlog={false}
              title="Dev Finance"
              description="Dev Finance is a web application I developed to manage my personal finances, keeping track of income and expenses in a simple and organized way. Built with HTML, CSS, and JavaScript, the project was born out of the need for a more direct and practical approach to budgeting.
              Although it hasn't been deployed for clients, I use Dev Finance daily, and it is planned to become one of the key robust apps within my business. The main focus is to deliver simplicity, clarity, and financial control through a clean and accessible interface."
              ghLink="https://github.com/Givemechandon/devfinance"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
