import "./MenuItem.css";

function MenuItem({ name, description, price, image }) {
  // Format price display
  const formatPrice = (priceString) => {
    // Check if price includes "Hot" or "Cold" (has both options)
    if (priceString.includes("Hot") || priceString.includes("Cold")) {
      return priceString.replace(/(\d+)/g, "Rs $1");
    }
    // Single price
    return `Rs ${priceString}`;
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="menu-item-content">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default MenuItem;
