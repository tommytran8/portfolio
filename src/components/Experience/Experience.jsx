import React from "react";
import ExperienceListElement from "./ExperienceListElement";

const Experience = () => {
  return (
    <div className="experience">
      <ul>
        <ExperienceListElement
          client={"ClickUp"}
          duration={"February 2021 - Present"}
          location={"San Diego, CA"}
          role={"Full-Stack Developer"}
          project={"ClickUp Web Platform"}
          description={`
            The ClickUp platform strives to be the
            all-in-one productivity platform that flexes to the way people want
            to work. It replaces all individual workplace productivity tools
            with a single, unified platform that includes project management,
            chats, document collaboration, whiteboards, spreadsheets, and goals.
          `}
          responsibilities={`
            Developed and maintained front-end projects
            using cutting-edge web development technologies like React, Redux,
            React Router, HTML5, SCSS, JavaScript, etc. Implemented dynamic
            routing and redesigned existing applications into a SPA using React
            Router Built scalable, maintainable and reusable SCSS templates
            while adhering to the BEM naming convention. Used Typescript to
            ensure code maintainability, scalability and readability for
            colleague developers. Enables type safety as javascript is loosely
            typed. Worked with React redux to utilize a global state management
            architecture and prevent need for prop drilling and state lifting.
            Developed with MongoDB to maintain non-relational data and its API
            to perform CRUD operations. Participated in code review to increase
            code quality and learn the source code Composed unit testing using
            Jest and React-Testing-Library. Worked in an Agile team and
            participated in Sprint meetings, Daily Stand-Ups, Sprint Review,
            Retrospective, etc. Used Git for version control
          `}
        />
        <br />
        <hr />
        <br />
        <ExperienceListElement
          client={"Veyo"}
          duration={"November 2019 - January 2021"}
          location={"San Diego, CA"}
          role={"Front-End Developer"}
          project={"Veyo Web Portal"}
          description={`
          Veyo technology was built to help the health
          industry better manage their non-emergency medical transportation
          (NEMT) program. Veyo was built, from the ground up, to be a
          healthcare ally by using data and technology to cut costs and
          improve outcomes. From basic requirements, such as providing
          encounter data and managing eligibility files, to delivering
          advanced dashboards and reporting. For example, the Veyo portal
          gives access to all information regarding trip details and history,
          payment information, credentialing and licensing info, and much much
          more. With the Provider Portal, Veyo Providers can view, accept,
          route, and dispatch trips to their vehicle fleets.
          `}
          responsibilities={`
          Developed projects with cutting-edge web
          development technologies like React, Redux, React Router, HTML5,
          CSS3, JavaScript, etc. Worked with React redux to utilize a global
          state management architecture and prevent need for prop drilling and
          state lifting. Implemented dynamic routing and redesigned existing
          applications into a SPA using React Router Created page layouts and
          new features by collaborating with designers and developers.
          Composed unit testing using Jest and React-Testing-Library. Used Git
          for version control and involved in Agile and Scrum workflow.
          `}
        />
        <br />
        <hr />
        <br />
        <ExperienceListElement
          client={"Verimatrix"}
          duration={"July 2018 - September 2019"}
          location={"San Diego, CA"}
          role={"Front-End Developer"}
          project={"Secure Delivery Platform"}
          description={`
          The Verimatrix Secure Delivery Platform is a
          powerful cloud ecosystem that combines cybersecurity and anti-piracy
          services into a single pane of glass experience, providing
          unparalleled value to media companies, content owners, streaming
          media providers and broadcast operators worldwide
          `}
          responsibilities={`
          Developed clickable prototypes and migrated
          existing website using technologies such as HTML5, CSS3, Javascript,
          and React. Implemented Responsive Web Design with Bootstrap and CSS
          to ensure website compatibility with different devices like
          desktops, laptops, tablets, and smart phone. Migrate existing
          javascript code following MVC model to React. Refactored components
          using React class components Used Higher-Order Components to create
          reusable components, lifecycle, and state logic. Refactored page
          layouts, navigation, animation buttons, etc. Worked with the team
          following Agile/Scrum methodology.
          `}
        />
      </ul>
    </div>
  );
};

export default Experience;
