// components/About.tsx

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

interface AboutProps {
  aboutImage: string;
}

const About = ({ aboutImage }: AboutProps) => {
  return (
    <section className="py-20" style={{ backgroundColor: "#020012" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={aboutImage}
            alt="Sobre mim"
            width={400}
            height={400}
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            Sobre Mim
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            Sou um desenvolvedor full stack apaixonado por tecnologia e
            inovação. Tenho experiência em criar aplicações web modernas e
            escaláveis, sempre buscando entregar valor e experiências incríveis
            para os usuários.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            Minhas principais habilidades incluem trabalhar com frameworks de
            front-end como React e Vue.js, além de tecnologias back-end como
            Node.js e .NET. Sou adepto de práticas ágeis e de escrever código
            limpo e eficiente.
          </p>


          {/* Ícones das Redes Sociais */}
          <div className="flex justify-start mt-6 space-x-6">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/seuusuario/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/seuusuario/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
