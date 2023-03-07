'use client';

import { useState, useMemo, useEffect } from "react";
import axios from "axios";

import BodyClass from "@/app/components/BodyClass";

interface IDestinationsItem {
  description: string;
  distance: string;
  name: string;
  travel: string;
  images: {
    webp: string;
    png: string;
  }
}

export default function Page() {
  const [data, setData] = useState<IDestinationsItem[]>([]);
  const [active, setActive] = useState<number>(0);

  const item: IDestinationsItem | false = useMemo(() => data.length > 0 && data[active], [data, active]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const {data} = await axios.get('/api/destinations')
    setData(data);
  }

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <BodyClass bodyClass="destination" />
      <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

      {item && <>
        <picture>
          <source srcSet={item.images.webp} type="image/webp" />
          <img src={item.images.png} alt={item.name} />
        </picture>

        <div className="tab-list underline-indicators flex">
          {data.map((item: IDestinationsItem, index: number) => (
            <button onClick={() => setActive(index)}
                    aria-selected={index === active ? 'true' : 'false'}
                    role="tab"
                    key={index}
                    className="uppercase ff-sans-cond text-accent letter-spacing-2">{item.name}
            </button>
          ))}
        </div>
        <article className="destination-info flow">
          <h2 className="fs-800 uppercase ff-serif">{item.name}</h2>

          <p>{item.description}</p>

          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{item.distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{item.travel}</p>
            </div>
          </div>
        </article>
      </>}
    </main>
  );
}
