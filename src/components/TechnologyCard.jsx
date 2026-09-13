function TechnologyCard({ technology, onAdd }) {
  return (
    <div className="technology-card">
      <img
        src={technology.icon}
        alt={technology.name}
        className="technology-icon"
      />

      <span className="technology-badge">
        {technology.badge}
      </span>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="technology-info">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
      </div>

      <div className="technology-rating">
        ⭐ {technology.rating}
      </div>

      <button
        className="add-stack-btn"
        onClick={() => onAdd(technology)}
      >
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;