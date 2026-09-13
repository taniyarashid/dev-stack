import { useState } from "react";
import { toast } from "react-toastify";
import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function TechnologySection() {
  const [stack, setStack] = useState([]);
  const removeFromStack = (id) => {
  const removedTechnology = stack.find(
    (technology) => technology.id === id
  );

  setStack(stack.filter((technology) => technology.id !== id));

  toast.success(`${removedTechnology.name} removed from your stack!`);
};
const removeAll = () => {
  setStack([]);
  toast.success("All technologies removed from your stack!");
};

  return (
    <section className="technology-section">
      <h2>Explore Technologies</h2>

      <div className="technology-layout">
        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
  key={technology.id}
  technology={technology}
  isAdded={stack.some((item) => item.id === technology.id)}
 onAdd={(technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning("This technology is already in your stack!");
    return;
  }

  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack!`);
}}
/>
          ))}
        </div>

       <YourStack
  stack={stack}
  onRemove={removeFromStack}
  onRemoveAll={removeAll}
/>
      </div>
    </section>
  );
}

export default TechnologySection;