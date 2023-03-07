import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from "react-router-dom";

import Logo from "assets/shared/logo.svg";

const routs = [
  {route: "/", label: "home"},
  {route: "/destination", label: "destination"},
  {route: "/crew", label: "crew"},
  {route: "/technology", label: "technology"},
];

function Root() {
  const {pathname} = useLocation();

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <header className="primary-header flex">
        <div>
          <img src={Logo} alt="space logo" className="logo" />
        </div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={() => setIsShow(!isShow)}>
          <span className="sr-only" aria-expanded={isShow ? "true" : "false"}>Menu</span>
        </button>
        <nav>
          <ul id="primary-navigation" data-visible={isShow ? "true" : "false"} className="primary-navigation underline-indicators flex">
            {routs.map((item, index) => {
              return <li onClick={() => setIsShow(false)} className={pathname === item.route ? "active" : ""} key={item.route}>
                <NavLink className={`ff-sans-cond uppercase text-white letter-spacing-2`}
                         to={item.route}><span aria-hidden="true">0{index}</span> {item.label}</NavLink>
              </li>
            })}

          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Root;
