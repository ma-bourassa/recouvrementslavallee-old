import { Link } from "gatsby";
import React, { useState } from "react";
import siteTitle from "./title";
import logo from "../images/logo_fb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-grey-dark">
      <div className="flex flex-wrap items-baseline justify-between px-2 py-2 md:py-4 md:justify-around">
        <div className="flex p-2 items-baseline">
          <Link to="/">
            <img className="flex object-scale-down pr-4" src={logo} alt={siteTitle()} />
          </Link>

          <button className="flex px-3 text-white  md:hidden" onClick={() => toggleExpansion(!isExpanded)}>
            <FontAwesomeIcon icon="bars" size="2x" />
          </button>
        </div>
        <nav className={`${isExpanded ? `block` : `hidden`}  mt-2 md:flex md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/index`,
              title: `Accueil`,
            },
            {
              route: `/about`,
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
