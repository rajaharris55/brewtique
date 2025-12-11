import "./PageHero.css";

function PageHero({ title }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
      </div>
    </section>
  );
}

export default PageHero;
