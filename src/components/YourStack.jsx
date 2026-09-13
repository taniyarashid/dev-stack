function YourStack({ stack, onRemove }) {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <h2>Your Stack</h2>
        <span>{stack.length} Technology Selected</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>No technologies added yet.</p>
          <span>Add technologies from the list to build your stack.</span>
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div>
                <h4>{technology.name}</h4>
                <span>{technology.category}</span>
              </div>

              <button onClick={() => onRemove(technology.id)}>✕</button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;