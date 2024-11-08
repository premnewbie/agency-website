import hero2 from "../assets/hero2.svg";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-wrap-reverse max-sm:text-center py-20 max-sm:py-5">
        <div className="max-sm:w-full w-1/2 mt-10 lg:mt-0">
          <h2 className="lg:text-5xl sm:text-3xl max-sm:text-xl font-bold text-gray-800">
            World class design for your products
          </h2>
          <p className="mt-8 md:text-2xl text-base text-gray-600">
            Let's bring life to your brand.
          </p>
          <div className="flex max-sm:justify-center gap-4 mt-10">
            <button className="bg-purple-600 text-white p-2 rounded">
              Services
            </button>
            <button className="bg-red-600 text-white p-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-sm:w-full w-1/2">
          <img src={hero2} alt="Hero-img" />
        </div>
      </div>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
        <span className="ml-2">Scroll Down</span>
      </div>
    </section>
  );
}
