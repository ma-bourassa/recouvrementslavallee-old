import { Link } from "gatsby";
import React, { useState } from "react";
import siteTitle from "./title";
import logo from "../images/logo_fb.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-grey-dark">
      <div className="flex flex-wrap items-baseline justify-between px-2 py-2 md:py-4 md:justify-around">
        <div className="flex p-2 items-center">
          <Link to="/">
            <img className="flex object-scale-down pr-4" src={logo} alt={siteTitle()} />
          </Link>

          <button className="flex pt-4 px-4 text-white  md:hidden" onClick={() => toggleExpansion(!isExpanded)}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav className={`${isExpanded ? `block` : `hidden`}  mt-2 md:flex md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/a-propos`,
              title: `À propos`,
            },
            {
              route: `/services`,
              title: `Services`,
            },
            {
              route: `/realisations`,
              title: `Réalisations`,
            },
            {
              route: `/contact`,
              title: `Contactez-nous`,
            },
          ].map((link) => (
            <Link
              className="block px-4 py-3 text-white border-t-2 md:border-t-0 text-xl font-semibold md:inline-block hover:bg-grey-darker"
              activeClassName="border-b-2 md:border-blue2 "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <div className="hidden md:block">
            <a
              className="border border-white text-white text-xl font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-black md:ml-6 md:mr-4"
              href="tel:+14503573127"
            >
              450.357.3127
            </a>
            <a
              className="border border-white text-white text-xl font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-black "
              href="tel:+15147933743"
            >
              514.793.3743
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
