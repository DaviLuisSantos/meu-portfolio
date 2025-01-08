// pages/_app.tsx

import '../styles/globals.css'; // Importe seus estilos globais
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'; // Importando o ThemeProvider
import Head from 'next/head'; // Importando o Head para meta tags

/**
 * Componente principal do aplicativo Next.js
 * @param {AppProps} param0 - Propriedades do componente
 * @returns {JSX.Element} Componente MyApp
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Meu portfólio pessoal" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;