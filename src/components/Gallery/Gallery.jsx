import "./Gallery.css";
import img1 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.53.56 PM.jpeg";
import img2 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.53.57 PM.jpeg";
import img3 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.53.58 PM (1).jpeg";
import img4 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.53.59 PM.jpeg";
import img5 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.54.01 PM.jpeg";
import img6 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.54.02 PM.jpeg";
import img7 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.54.08 PM.jpeg";
import img8 from "../../assets/Restaurant/WhatsApp Image 2025-12-08 at 8.54.09 PM.jpeg";

function Gallery() {
  const images = [
    { src: img1, alt: "Restaurant ambiance 1" },
    { src: img2, alt: "Restaurant ambiance 2" },
    { src: img3, alt: "Restaurant ambiance 3" },
    { src: img4, alt: "Restaurant ambiance 4" },
    { src: img5, alt: "Restaurant ambiance 5" },
    { src: img6, alt: "Restaurant ambiance 6" },
    { src: img7, alt: "Restaurant ambiance 7" },
    { src: img8, alt: "Restaurant ambiance 8" },
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Space</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
