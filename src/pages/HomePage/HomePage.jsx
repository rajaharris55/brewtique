import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MenuPreview from "../../components/MenuPreview/MenuPreview";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MenuPreview />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
