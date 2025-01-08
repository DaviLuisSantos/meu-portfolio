// components/Projects.tsx

import ProjectCard from "./ProjectCard"; // Importe o componente ProjectCard

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const projects: ProjectProps[] = [
  {
    title: "Projeto 1",
    description:
      "Descrição do projeto 1, detalhando as funcionalidades e tecnologias utilizadas.",
    image: "/images/project1.jpg",
    githubLink: "https://github.com/usuario/projeto1",
    liveLink: "https://www.projeto1.com",
  },
  {
    title: "Projeto 2",
    description:
      "Descrição do projeto 2, detalhando as funcionalidades e tecnologias utilizadas.",
    image: "/images/project2.jpg",
    githubLink: "https://github.com/usuario/projeto2",
    liveLink: "https://www.projeto2.com",
  },
  {
    title: "Projeto 3",
    description:
      "Descrição do projeto 3, detalhando as funcionalidades e tecnologias utilizadas.",
    image: "/images/project3.jpg",
    githubLink: "https://github.com/usuario/projeto3",
    liveLink: "https://www.projeto3.com",
  },
];

const Projects = () => {
  return (
    <section className="py-16 " id="projetos">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold  mb-8">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
