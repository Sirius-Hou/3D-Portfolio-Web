import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Project from "./Project"; // Adjusted to default export if applicable
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            modalContent={project.modalContent}
            source_code_link={project.source_code_link}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
