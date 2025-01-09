// pages/index.tsx

import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

/**
 * Página inicial do portfólio
 * @returns {JSX.Element} Componente Home
 */
const Home = () => {
  return (
    <div>
      <Head>
        <title>Meu Portfólio</title>
        <meta
          name="description"
          content="Portfólio de um Desenvolvedor Full Stack"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            /* Ajuste do espaço de rolagem para não sobrepor a navbar fixa */
            html {
              scroll-padding-top: 4rem; /* 64px, dependendo da altura da navbar */
            }
          `}
        </style>
      </Head>

      {/* Conteúdo principal */}
      <main>
        {/* Cada seção possui uma âncora para a navegação */}
        <section id="hero">
          <Hero profilePic="/images/1733445778396.jpg" />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About aboutImage="/images/layer 2.png" />
        </section>
      </main>

    </div>
  );
};

export default Home;
