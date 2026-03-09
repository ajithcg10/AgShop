interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading: string;
  features: Feature[];
}

const FeatureGrid = ({ heading, features }: FeatureGridProps) => (
  <section className="cfg-section">
    <h2 className="cfg-section__heading">{heading}</h2>
    <div className="cfg-grid cfg-grid--4">
      {features.map((f) => (
        <div key={f.title} className="cfg-card">
          <span className="cfg-card__icon">{f.icon}</span>
          <h3 className="cfg-card__title">{f.title}</h3>
          <p className="cfg-card__desc">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureGrid;
