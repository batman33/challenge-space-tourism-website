import React, { useEffect, useState, useMemo } from "react";

import data from "data.json";

const Crew = () => {

  const [active, setActive] = useState(0);

  const person = useMemo(() => data.crew[active], [active]);

  useEffect(() => {
    document.body.classList.add("crew");

    return () => {
      document.body.classList.remove("crew");
    }
  });

  return (<main id="main" className="grid-container grid-container--crew flow">
    <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

    <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
      {data.crew.map(({role}, index) => {
        return (<button key={role} onClick={() => setActive(index)} aria-selected={active === index ? "true" : "false"} role="tab">
          <span className="sr-only">The {role}</span></button>)
      })}
    </div>

    <article className="crew-details flow" id="commander-tab" role="tabpanel">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{person.role}</h2>
        <p className="fs-700 uppercase ff-serif">{person.name}</p>
      </header>
      <p>{person.bio}</p>
    </article>

    <picture id="commander-image">
      <source srcSet={require(`../${person.images.webp}`)} type="image/webp" />
      <img src={require(`../${person.images.png}`)} alt={person.name} />
    </picture>
  </main>)
};

export default Crew;
