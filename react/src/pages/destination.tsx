import React, { useEffect, useState, useMemo } from "react";

import data from "data.json";

const Destination = () => {

  const [active, setActive] = useState(0);

  const destination = useMemo(() => data.destinations[active], [active]);

  useEffect(() => {
    document.body.classList.add("destination");

    return () => {
      document.body.classList.remove("destination");
    }
  });

  return (<main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

      <picture id="moon-image">
        <source srcSet={require(`../${destination.images.webp}`)} type="image/webp" />
        <img src={require(`../${destination.images.png}`)} alt={`the ${destination.name}`} />
      </picture>

      <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        {data.destinations.map((item, index) => {
          return (
            <button className="uppercase ff-sans-cond text-accent letter-spacing-2"
                    aria-selected={active === index ? "true" : "false"}
                    onClick={() => setActive(index)}
                    key={item.name}
                    role="tab">{item.name}
            </button>
          );
        })}
      </div>

      <article className="destination-info flow">
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
        <p>{destination.description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
