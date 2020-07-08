import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo_fb.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-grey">
      <div className="flex flex-wrap items-end justify-around p-4 md:p-8">
        <Link to="/">
          <img className="flex h-10 sm:h-16 md:h-20" src={logo} alt={site.siteMetadata.title} />
        </Link>

        <button
          className="flex items-end mt-3 px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${isExpanded ? `block` : `hidden`} md:flex md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/a-propos`,
              title: `À propos`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
            {
              route: `/services`,
              title: `Service de vente`,
            },
            {
              route: `/realisations`,
              title: `Nos réalisation`,
            },
            {
              route: `/soumission`,
              title: `Demandez une soumission`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:ml-6 md:mt-8"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
