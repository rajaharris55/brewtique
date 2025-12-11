import { Link } from "react-router-dom";
import "./MenuPreview.css";

function MenuPreview() {
  return (
    <section className="menu-preview">
      <div className="menu-preview-content">
        <h2 className="menu-preview-title">Our Menu</h2>
        <p className="menu-preview-text">
          Discover our carefully curated selection of artisan coffees, fresh
          pastries, and delicious treats
        </p>
        <Link to="/menu" className="menu-btn">
          Explore Menu
        </Link>
      </div>
    </section>
  );
}

export default MenuPreview;
