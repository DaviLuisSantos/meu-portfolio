// components/Hero.tsx
import Image from "next/image";
import Slider from "react-slick";
import SkillCard from "./SkillCard"; // Import SkillCard
import { FaReact, FaNodeJs, FaDocker, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiVuedotjs, SiSqlite, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
  profilePic: string;
}

const skills = [
  {
    icon: <FaReact />,
    label: "React",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <FaNodeJs />,
    label: "Express.js",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: <SiDotnet />,
    label: ".NET",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: <FaDocker />,
    label: "Docker",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <SiPostgresql />,
    label: "PostgreSQL",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <SiVuedotjs />,
    label: "Vue.js",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: <SiSqlite />,
    label: "SQLite",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next.js",
    color: "text-black",
    bgColor: "bg-gray-100",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    color: "text-teal-500",
    bgColor: "bg-teal-100",
  },
];

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
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://lh3.googleusercontent.com/vQ0Ow6LwCpigfPyTGUhXEfdMBWPyHmaCo7eoQW7bv3QoZXW6EIj18FPiCLI1vlMYlUAOvEXta1KSkl8P2KScquYJb-Dm_QygP9kdlLYkpF4nVyEH=w1072-h603-n-nu)",
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
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg">
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
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
