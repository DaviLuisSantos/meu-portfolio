import Image from "next/image";
import Slider from "react-slick";
import SkillCard from "./SkillCard"; // Import SkillCard
import { skills } from "../data/skills";
import { ModalProvider } from "../contexts/ModalContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
  profilePic: string;
}

const Hero = ({ profilePic }: HeroProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Transition speed in milliseconds
    slidesToShow: 6, // Number of cards visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between automatic transitions in milliseconds
    cssEase: "linear", // Smooth and continuous transition
    responsive: [
      {
        breakpoint: 1024, // Screen width above 1024px (tablets, laptops)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Screen width below 1024px (tablets and small desktops)
        settings: {
          slidesToShow: 3, // Fewer cards visible on medium screens
        },
      },
      {
        breakpoint: 480, // Screen width below 768px (mobile devices)
        settings: {
          slidesToShow: 2, // Show 2 cards on small screens
        },
      },
    ],
  };

  return (
    <ModalProvider>
      <section
        className="py-40 bg-cover bg-center relative"
        style={{
          backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent), 
        url(https://lh3.googleusercontent.com/vQ0Ow6LwCpigfPyTGUhXEfdMBWPyHmaCo7eoQW7bv3QoZXW6EIj18FPiCLI1vlMYlUAOvEXta1KSkl8P2KScquYJb-Dm_QygP9kdlLYkpF4nVyEH=w1072-h603-n-nu)
      `,
        }}
      >
        {/* Overlapping gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <div className="mb-12 text-center">
            <Image
              src={profilePic}
              alt="Developer Davi Luis"
              width={150}
              height={150}
              className="rounded-full shadow-lg mx-auto"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
              Davi Luis
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg mx-auto">
              Building Scalable Web Applications and Intuitive User Experiences
            </p>
          </div>

          <div className="w-full">
            <Slider {...settings} className="px-2">
              {skills.map((skill, index) => (
                <div key={index} className="px-2">
                  <SkillCard
                    icon={skill.icon}
                    label={skill.label}
                    color={skill.color}
                    bgColor={skill.bgColor}
                    description={skill.description}
                    experience={skill.experience}
                    projects={skill.projects}
                    imageUrl={skill.imageUrl}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Seção para baixar o currículo */}
          <div className="mt-12">
            <a
              href="/DAVI-LUIS.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
          
        </div>
      </section>
    </ModalProvider>
  );
};

export default Hero;