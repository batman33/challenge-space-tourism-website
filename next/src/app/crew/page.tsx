'use client';

import { useEffect, useState, useMemo } from "react";
import axios from "axios";

import BodyClass from "@/app/components/BodyClass";

interface ICrewItem {
  bio: string;
  images: {
    webp: string;
    png: string;
  }
  name: string;
  role: string;
}

export default function Page() {
  const [data, setData] = useState<ICrewItem[]>([]);
  const [active, setActive] = useState<number>(0);

  const item: ICrewItem | false = useMemo(() => data.length > 0 && data[active], [active, data]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const {data} = await axios.get('/api/crew')
    setData(data);
  }

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <BodyClass bodyClass="crew" />
      <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

      {item && <>
        <div className="dot-indicators flex">
          {data.map((item: ICrewItem, index: number) => (
            <button onClick={() => setActive(index)} aria-selected={index === active ? 'true' : 'false'} role="tab" key={index}>
              <span className="sr-only">The {item.name}</span>
            </button>
          ))}
        </div>

        <article className="crew-details flow" id="commander-tab">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{item.role}</h2>
            <p className="fs-700 uppercase ff-serif">{item.name}</p>
          </header>
          <p>{item.bio}</p>
        </article>

        <picture>
          <source srcSet={item.images.webp} type="image/webp" />
          <img src={item.images.png} alt={item.name} />
        </picture>
      </>}

    </main>
  );
}
