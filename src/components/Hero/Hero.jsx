import "./Hero.scss";
import logo from "../../assets/brewtique.png";
import cup from "../../assets/cup.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="left">
        <p className="slogan-text">Quality . Craftsmanship . Comfort</p>
        <img src={logo} alt="" className="logo" />
        <p className="description">
          Brewtique Speciality Café, located in Gulberg Green, is a modern
          coffee brand built around craftsmanship, quality, and comfort. We
          specialize in premium, hand-crafted brews made from high grade beans
          selected for their flavour, consistency, and freshness. Our brand
          blends minimalist design warm ambience and refined taste to create a
          café experience that feels both elevated and welcoming.
        </p>
        <div className="buttons">
          <button>Menu</button>
          <button>Visit Us</button>
        </div>
      </div>
      <div className="right">
        <img src={cup} alt="" />
      </div>
    </div>
  );
};

export default Hero;
