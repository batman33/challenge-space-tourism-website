'use client';

import { useState, useMemo, useEffect } from "react";
import axios from "axios";

import BodyClass from "@/app/components/BodyClass";

interface IDestinationsItem {
  description: string;
  name: string;
  images: {
    landscape: string;
    portrait: string;
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
    const {data} = await axios.get('/api/technology')
    console.log(data);
    setData(data);
  }

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <BodyClass bodyClass="technology" />
      <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

      <div className="dot-indicators-2 flex" role="tablist" aria-label="technology list">
        {data.map((item: IDestinationsItem, index: number) => (
          <button onClick={() => setActive(index)}
                  aria-selected={index === active ? 'true' : 'false'}
                  role="tab"
                  key={index}
                  className="ff-serif fs-600">{index + 1}
          </button>
        ))}
      </div>

      {item && <>
        <article className="technology-details flow">
          <header>
            <h2 className="text-accent fs-300 ff-serif uppercase">The terminology...</h2>
            <p className="fs-700 uppercase ff-serif">{item.name}</p>
          </header>
          <p>{item.description}</p>
        </article>

        <picture id="capsule-image">
          <img className="landscape" src={item.images.landscape} alt={item.name} />
          <img className="portrait" src={item.images.portrait} alt={item.name} />
        </picture>
      </>}
    </main>
  );
}
