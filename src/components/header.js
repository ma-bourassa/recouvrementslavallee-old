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
      <div className="flex flex-wrap items-end justify-between px-2 py-4 md:justify-around">
        <Link to="/">
          <img className="mb-2 flex h-12 sm:h-16 md:h-20" src={logo} alt={site.siteMetadata.title} />
        </Link>

        <button
          className="mb-2 flex items-end px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } divide-y divide-white md:divide-y-0 md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/a-propos`,
              title: `À propos`,
            },
            {
              route: `/services`,
              title: `Nos Services`,
            },
            {
              route: `/realisations`,
              title: `Nos réalisations`,
            },
            {
              route: `/contact`,
              title: `Contactez-nous`,
            },
          ].map((link) => (
            <Link
              className="block px-4 py-3 text-white text-xl font-semibold no-underline md:rounded md:border-0 md:inline-block hover:bg-grey-dark active:bg-grey-dark"
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
