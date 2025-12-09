import "./Hero.scss";
import logo from "../../assets/brewtique.png";

const Hero = () => {
  return (
    <div
      className="w-full min-h-90 bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center px-8 hero"
      style={{ backgroundImage: "url(/bg.jpeg)" }}
    >
      <div className="container mx-auto py-24 flex flex-col items-start text-left gap-8">
        <p className="tracking-[0.25em] text-sm text-white font-loverine">
          Craftsmanship • Quality • Comfort
        </p>

        <img src={logo} alt="Brewtique Logo" className="w-52 sm:w-64" />

        <p className="max-w-2xl text-xl leading-relaxed text-gray-300 font-causten">
          Brewtique Speciality Café, located in Gulberg Green, is a modern
          coffee brand built around craftsmanship, quality, and comfort. We
          specialize in premium, hand-crafted brews made from high-grade beans
          selected for flavor, consistency, and freshness. Our minimalist
          design, warm ambience, and refined taste create a café experience that
          feels both elevated and welcoming.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Menu
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Visit Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
