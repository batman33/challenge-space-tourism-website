'use client';

import { useEffect, FC } from "react";

interface IProps {
  bodyClass: string;
}

const BodyClass: FC<IProps> = ({ bodyClass }) => {
  useEffect(() => {
    document.body.classList.add(bodyClass);

    return () => document.body.classList.remove(bodyClass);
  }, [])

  return <></>
};

export default BodyClass;
