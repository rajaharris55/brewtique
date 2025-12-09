import "./Navbar.scss";
import logo from "../assets/brewtique.png";

const Navbar = () => {
  return (
    <nav className=" min-h-full shadow-lg flex items-center bg-secondary p-4">
      <div className="w-35">
        <img src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
