// pages/sobre.tsx
import Head from "next/head";
import AboutMe from "../components/About";

const Sobre = () => {
  return (
    <div>
      <Head>
        <title>Sobre Mim - Meu Portfólio</title>
        <meta
          name="description"
          content="Conheça mais sobre mim, minhas experiências e paixões."
        />
      </Head>
      <main>
        <AboutMe />
      </main>
    </div>
  );
};

export default Sobre;
