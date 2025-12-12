import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageHero from "../../components/PageHero/PageHero";
import MenuItem from "../../components/MenuItem/MenuItem";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/brewtique.png";
import "./MenuPage.css";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Coffee",
    "Slow Bar",
    "Espresso",
    "Matcha",
    "Green Tea",
    "Frappes",
    "Ice Tea",
    "Mocktails",
    "Mojitos",
    "Margaritas",
    "Milkshakes",
    "Smoothies",
    "Fresh Juices",
  ];

  const menuItems = [
    // Coffee
    {
      id: 1,
      name: "Latte",
      description: "Smooth espresso with steamed milk and microfoam.",
      price: "Hot 700 | Cold 800",
      category: "Coffee",
      image: logo,
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Equal espresso, steamed milk, and airy foam.",
      price: "Hot 700 | Cold 800",
      category: "Coffee",
      image: logo,
    },
    {
      id: 3,
      name: "Spanish Latte",
      description: "Espresso with condensed milk and steamed milk.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 4,
      name: "Rose Latte",
      description: "Espresso with rose syrup and silky milk.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 5,
      name: "Brewtique Mocha",
      description: "Cocoa, espresso, steamed milk, and chocolate drizzle.",
      price: "Hot 945 | Cold 1095",
      category: "Coffee",
      image: logo,
    },
    {
      id: 6,
      name: "Cortado",
      description: "Equal parts espresso and warm milk.",
      price: "Hot 600",
      category: "Coffee",
      image: logo,
    },
    {
      id: 7,
      name: "Piccolo",
      description: "Mini latte with light steamed milk.",
      price: "Hot 545",
      category: "Coffee",
      image: logo,
    },
    {
      id: 8,
      name: "Hazelnut Latte",
      description: "Espresso with milk and hazelnut syrup.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 9,
      name: "Caramel Latte",
      description: "Espresso with milk and buttery caramel.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 10,
      name: "Vanilla Latte",
      description: "Espresso with milk and vanilla syrup.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 11,
      name: "Irish Latte",
      description: "Espresso with Irish cream–style syrup.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },
    {
      id: 12,
      name: "Cheesecake Latte",
      description: "Espresso with cheesecake-flavored syrup.",
      price: "Hot 850 | Cold 945",
      category: "Coffee",
      image: logo,
    },

    // Slow Bar
    {
      id: 13,
      name: "V60 Pour Over",
      description: "Light roast brewed through V60 for clarity.",
      price: "Hot 845 | Cold 945",
      category: "Slow Bar",
      image: logo,
    },
    {
      id: 14,
      name: "AeroPress",
      description: "Pressure-brewed clean, full-bodied coffee.",
      price: "Hot 845 | Cold 945",
      category: "Slow Bar",
      image: logo,
    },

    // Espresso
    {
      id: 15,
      name: "Espresso",
      description: "Rich single shot of espresso.",
      price: "470",
      category: "Espresso",
      image: logo,
    },
    {
      id: 16,
      name: "Ristretto",
      description: "More concentrated short espresso.",
      price: "470",
      category: "Espresso",
      image: logo,
    },
    {
      id: 17,
      name: "Americano",
      description: "Espresso diluted with hot water.",
      price: "545",
      category: "Espresso",
      image: logo,
    },
    {
      id: 18,
      name: "Doppio",
      description: "Double espresso shot.",
      price: "545",
      category: "Espresso",
      image: logo,
    },
    {
      id: 19,
      name: "Espresso Macchiato",
      description: "Espresso topped with milk foam.",
      price: "545",
      category: "Espresso",
      image: logo,
    },

    // Matcha
    {
      id: 20,
      name: "Hot Matcha",
      description: "Ceremonial green tea whisked to froth.",
      price: "945",
      category: "Matcha",
      image: logo,
    },
    {
      id: 21,
      name: "Iced Matcha",
      description: "Chilled matcha served over ice.",
      price: "945",
      category: "Matcha",
      image: logo,
    },
    {
      id: 22,
      name: "Strawberry Matcha",
      description: "Matcha layered with strawberry purée.",
      price: "995",
      category: "Matcha",
      image: logo,
    },
    {
      id: 23,
      name: "Coconut Matcha",
      description: "Matcha blended with coconut milk.",
      price: "995",
      category: "Matcha",
      image: logo,
    },

    // Green Tea
    {
      id: 24,
      name: "Green Tea Mint",
      description: "Green tea brewed with fresh mint.",
      price: "420",
      category: "Green Tea",
      image: logo,
    },
    {
      id: 25,
      name: "Hibiscus",
      description: "Tart, floral hibiscus tea.",
      price: "450",
      category: "Green Tea",
      image: logo,
    },
    {
      id: 26,
      name: "Jasmine",
      description: "Fragrant jasmine-infused green tea.",
      price: "450",
      category: "Green Tea",
      image: logo,
    },
    {
      id: 27,
      name: "Strawberry Green Tea",
      description: "Green tea with strawberry essence.",
      price: "450",
      category: "Green Tea",
      image: logo,
    },

    // Frappes
    {
      id: 28,
      name: "Chocolate Almond Frappe",
      description: "Chocolate, almond syrup, milk, and ice.",
      price: "995",
      category: "Frappes",
      image: logo,
    },
    {
      id: 29,
      name: "Coconut Crunch",
      description: "Creamy coconut blended with ice.",
      price: "995",
      category: "Frappes",
      image: logo,
    },
    {
      id: 30,
      name: "Caramel Frappe",
      description: "Caramel, espresso, milk, and ice.",
      price: "995",
      category: "Frappes",
      image: logo,
    },

    // Ice Tea
    {
      id: 31,
      name: "Passion Fruit",
      description: "Iced tea with passion fruit.",
      price: "600",
      category: "Ice Tea",
      image: logo,
    },
    {
      id: 32,
      name: "Green Apple",
      description: "Crisp green apple iced tea.",
      price: "600",
      category: "Ice Tea",
      image: logo,
    },
    {
      id: 33,
      name: "Peach",
      description: "Sweet peach-infused iced tea.",
      price: "600",
      category: "Ice Tea",
      image: logo,
    },

    // Mocktails
    {
      id: 34,
      name: "Tropical Fizz",
      description: "Sparkling citrus and pineapple blend.",
      price: "850",
      category: "Mocktails",
      image: logo,
    },
    {
      id: 35,
      name: "Coconut Island",
      description: "Creamy coconut tropical drink.",
      price: "850",
      category: "Mocktails",
      image: logo,
    },
    {
      id: 36,
      name: "Orange Royale",
      description: "Fresh orange with sparkling soda.",
      price: "850",
      category: "Mocktails",
      image: logo,
    },
    {
      id: 37,
      name: "Fresh Lemonade",
      description: "Classic hand-squeezed lemonade.",
      price: "850",
      category: "Mocktails",
      image: logo,
    },

    // Mojitos
    {
      id: 38,
      name: "Strawberry Mojito",
      description: "Mint, lime, soda, and strawberries.",
      price: "700",
      category: "Mojitos",
      image: logo,
    },
    {
      id: 39,
      name: "Classic Mojito",
      description: "Mint, lime, and soda.",
      price: "650",
      category: "Mojitos",
      image: logo,
    },
    {
      id: 40,
      name: "Mixed Berry Mojito",
      description: "Mixed berries with lime and mint.",
      price: "700",
      category: "Mojitos",
      image: logo,
    },
    {
      id: 41,
      name: "Orange Mojito",
      description: "Zesty orange with mint and soda.",
      price: "700",
      category: "Mojitos",
      image: logo,
    },

    // Margaritas
    {
      id: 42,
      name: "Mint Margarita",
      description: "Mint blended with margarita mix.",
      price: "500",
      category: "Margaritas",
      image: logo,
    },
    {
      id: 43,
      name: "Basil Margarita",
      description: "Fresh basil twist margarita.",
      price: "500",
      category: "Margaritas",
      image: logo,
    },
    {
      id: 44,
      name: "Blue Margarita",
      description: "Blue citrus margarita.",
      price: "545",
      category: "Margaritas",
      image: logo,
    },
    {
      id: 45,
      name: "Watermelon Margarita",
      description: "Fresh watermelon margarita.",
      price: "545",
      category: "Margaritas",
      image: logo,
    },

    // Milkshakes
    {
      id: 46,
      name: "Dates & Almond Milkshake",
      description: "Dates and almonds blended in milk.",
      price: "700",
      category: "Milkshakes",
      image: logo,
    },
    {
      id: 47,
      name: "Oreo Milkshake",
      description: "Oreos blended with vanilla ice cream.",
      price: "600",
      category: "Milkshakes",
      image: logo,
    },
    {
      id: 48,
      name: "Strawberry Milkshake",
      description: "Fresh strawberries in creamy milk.",
      price: "700",
      category: "Milkshakes",
      image: logo,
    },
    {
      id: 49,
      name: "Banana Milkshake",
      description: "Sweet bananas blended smoothly.",
      price: "600",
      category: "Milkshakes",
      image: logo,
    },

    // Smoothies
    {
      id: 50,
      name: "Dates & Almond Smoothie",
      description: "Energy-packed date and almond smoothie.",
      price: "900",
      category: "Smoothies",
      image: logo,
    },
    {
      id: 51,
      name: "Strawberry Smoothie",
      description: "Refreshing strawberry blend.",
      price: "900",
      category: "Smoothies",
      image: logo,
    },
    {
      id: 52,
      name: "Banana Smoothie",
      description: "Creamy banana smoothie.",
      price: "900",
      category: "Smoothies",
      image: logo,
    },
    {
      id: 53,
      name: "Strawberry & Banana Smoothie",
      description: "Balanced strawberry-banana blend.",
      price: "900",
      category: "Smoothies",
      image: logo,
    },

    // Fresh Juices
    {
      id: 54,
      name: "Carrot Juice",
      description: "Freshly extracted carrot juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 55,
      name: "Watermelon Juice",
      description: "Refreshing watermelon juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 56,
      name: "Mango Juice",
      description: "Thick and sweet mango juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 57,
      name: "Apple Juice",
      description: "Crisp apple juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 58,
      name: "Strawberry Juice",
      description: "Fresh strawberry juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 59,
      name: "Orange Juice",
      description: "Vitamin-rich orange juice.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
    {
      id: 60,
      name: "Love Triangle",
      description: "Blend of orange, carrot, and apple.",
      price: "700",
      category: "Fresh Juices",
      image: logo,
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <Navbar />
      <PageHero title="Menu" />

      <section className="menu-section">
        <div className="menu-container">
          {/* Category pills */}
          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* WHEN ALL IS SELECTED → Show grouped categories */}
          {selectedCategory === "All" ? (
            <>
              {categories
                .filter((cat) => cat !== "All") // Skip "All"
                .map((category) => {
                  const items = menuItems.filter(
                    (item) => item.category === category
                  );

                  if (items.length === 0) return null;

                  return (
                    <div key={category} className="category-block">
                      <h2 className="category-title">{category}</h2>

                      <div className="menu-grid">
                        {items.map((item) => (
                          <MenuItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            // WHEN A CATEGORY IS SELECTED → Show filtered items normally
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MenuPage;
