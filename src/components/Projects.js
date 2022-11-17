import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    // <div className=" flex-shrink-0 snap-start z-30 bg-teal-600 w-screen h-screen flex items-center justify-center text-8xl clip-path-arrow">
    <div
      id="projects"
      className="flex snap-start
                    items-center justify-center

                    w-screen h-screen"
    >
      <div className="container mx-auto ">{<ProjectCards />}</div>
    </div>
  );
};

export default Projects;
