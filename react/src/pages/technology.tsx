import React, { useEffect, useState, useMemo } from "react";

import data from "data.json";

const Technology = () => {

  const [active, setActive] = useState(0);

  const technology = useMemo(() => data.technology[active], [active]);

  useEffect(() => {
    document.body.classList.add("technology");

    return () => {
      document.body.classList.remove("technology");
    }
  });

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

      <div className="dot-indicators-2 flex" role="tablist" aria-label="technology list">
        {data.technology.map((item, index) => (<button className="ff-serif fs-600"
                                                       key={item.name}
                                                       aria-selected={active === index ? "true" : "false"}
                                                       onClick={() => setActive(index)}
                                                       role="tab">{index}
        </button>))}
      </div>

      <article className="technology-details flow">
        <header>
          <h2 className="text-accent fs-300 ff-serif uppercase">The terminology...</h2>
          <p className="fs-700 uppercase ff-serif">{technology.name}</p>
        </header>
        <p>{technology.description}</p>
      </article>

      <picture id="capsule-image">
        <img className="landscape" src={require(`../${technology.images.landscape}`)} alt={technology.name} />
        <img className="portrait" src={require(`../${technology.images.portrait}`)} alt={technology.name} />
      </picture>
    </main>)
};

export default Technology;
