// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 text-center text-gray-300">
        <div className="container mx-auto">
          © {new Date().getFullYear()} - Meu Portfólio
        </div>
      </footer>
    );
  };
  
  export default Footer;