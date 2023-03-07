import Image from "next/image";

import logo from "../../../public/assets/shared/logo.svg";
import HeaderLink from "@/app/components/HeaderLink";

const menu = [
  {title: 'Home', path: '/'},
  {title: 'Destination', path: '/destination'},
  {title: 'Crew', path: '/crew'},
  {title: 'Technology', path: '/technology'},
]

function Header() {
  return (
    <header className="primary-header flex">
      <div>
        <Image src={logo} alt="space logo" className="logo" />
      </div>
      <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span>
      </button>
      <nav>
        <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
          {menu.map((item, index) => <HeaderLink {...item} index={index} key={index} />)}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
