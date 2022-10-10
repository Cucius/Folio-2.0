import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div className=" flex-shrink-0 snap-start z-30 bg-teal-600 w-screen h-screen flex items-center justify-center text-8xl clip-path-arrow">
      {" "}
      Projects
      <div>
        <ProjectCards />
      </div>
    </div>
  );
};

export default Projects;