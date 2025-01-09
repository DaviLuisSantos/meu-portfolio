import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

interface AboutProps {
  aboutImage: string;
}

const About = ({ aboutImage }: AboutProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl bg-opacity-50 backdrop-blur-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={aboutImage}
              alt="About me"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            Hello! I am a full stack developer passionate about creating
            innovative solutions that truly make a difference. I believe that
            technology has the power to transform the world, and I am constantly
            looking for ways to apply my expertise to generate impactful
            results. What motivates me is seeing my solutions making life easier
            for users and companies.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            I have a degree in Systems Analysis and Development and I am
            currently studying Computer Science. I also have technical courses
            in Systems Development and Mechatronics, which provided me with a
            solid foundation to solve complex problems efficiently. With
            experience in technologies such as React, Vue.js, Node.js, .NET,
            Express, Next.js, Tailwind, Sequelize, EntityFramework, and Docker,
            I am prepared to face challenges of any scale, always focusing on
            tangible and scalable results.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            I strongly believe in agile practices, teamwork, and the commitment
            to deliver solutions that meet the client&apos;s exact needs. I am
            the type of professional who not only solves problems but also seeks
            to optimize and anticipate solutions for the future. Let&apos;s talk
            about how I can add value to your team and help your company achieve
            extraordinary results.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <a
              href="https://github.com/DaviLuisSantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/davi-luis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/davi.luissc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
