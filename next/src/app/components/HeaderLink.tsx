'use client';

import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface IProps {
  path: string;
  title: string;
  index: number;
}

const HeaderLink: FC<IProps> = ({ path, title, index }) => {
  const pathname = usePathname()

  return (
    <li className={`${pathname === path ? 'active' : ''}`}>
      <Link className="ff-sans-cond uppercase text-white letter-spacing-2" href={path}>
        <span aria-hidden="true">0{index}</span> {title}
      </Link>
    </li>
  );
}

export default HeaderLink;
