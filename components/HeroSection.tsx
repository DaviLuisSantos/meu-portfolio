// components/HeroSection.tsx
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-900 text-white p-8 md:p-16">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          Im John, a <br /> Web Developer
        </h1>
        <p className="text-gray-300 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
          ullamcorper quis id elementum convallis lacus gravida.
        </p>
        <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
