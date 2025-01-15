import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import SkillCard from "./SkillCard"; // Import SkillCard
import { Skills } from "../data/skills"; // Certifique-se de que o caminho está correto
import { ModalProvider } from "../contexts/ModalContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher"; // Import LanguageSwitcher
import { useRouter } from "next/router"; // Import useRouter

interface HeroProps {
  profilePic: string;
}

const Hero = ({ profilePic }: HeroProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router; // Get the current locale from the router

  const [resumeLink, setResumeLink] = useState(
    locale === "en" ? "/DAVI-LUIS-EN.pdf" : "/DAVI-LUIS-PT.pdf"
  );

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setResumeLink(lng === "en" ? "/DAVI-LUIS-EN.pdf" : "/DAVI-LUIS-PT.pdf");
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    setResumeLink(locale === "en" ? "/DAVI-LUIS-EN.pdf" : "/DAVI-LUIS-PT.pdf");
  }, [locale]);

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
        <div className="absolute top-4 left-4 z-20">
          <LanguageSwitcher /> {/* Add LanguageSwitcher */}
        </div>
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
              {t("hero_title")}
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              {t("hero_subtitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg mx-auto">
              {t("hero_description")}
            </p>
          </div>

          <div className="w-full">
            <Slider {...settings} className="px-2">
              {Skills().map((skill, index) => (
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
              href={resumeLink}
              download="DAVI_LUIS"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {t("download_resume")}
            </a>
          </div>
        </div>
      </section>
    </ModalProvider>
  );
};

export default Hero;
