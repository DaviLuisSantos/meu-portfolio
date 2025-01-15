import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface AboutProps {
  aboutImage: string;
}

const About = ({ aboutImage }: AboutProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl bg-opacity-50 backdrop-blur-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={aboutImage}
              alt="About me"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            {t("about_me_title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            {t("about_me_paragraph1")}
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            {t("about_me_paragraph2")}
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-inter">
            {t("about_me_paragraph3")}
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