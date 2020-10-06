import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import siteTitle from "../title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo1.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="bg-grey-dark">
      <div className="flex flex-wrap items-baseline lg:items-center justify-between px-2 py-4 lg:justify-around">
        <Link className="w-4/5 lg:w-1/4 px-2" to="/">
          <Img alt={siteTitle()} fluid={data.logo.childImageSharp.fluid}></Img>
        </Link>

        <button
          aria-label="menu"
          className="w-1/5 text-white lg:hidden focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <FontAwesomeIcon icon="bars" size="2x" color="white" />
        </button>
        <nav className={`${isExpanded ? `block` : `hidden`}  mt-2 lg:flex lg:items-center w-full lg:w-auto`}>
          {[
            {
              route: ``,
              title: `Accueil`,
            },
            {
              route: `/produits`,
              title: `Produits`,
            },
            {
              route: `/realisations`,
              title: `Réalisations`,
            },
            {
              route: `/contactez-nous`,
              title: `Contactez-nous`,
            },
          ].map((link) => (
            <Link
              className="block px-4 py-3 text-white border-t-2 lg:border-t-0 text-lg font-semibold lg:inline-block hover:bg-grey-darker transition duration-500"
              activeClassName="lg:border-b-2 lg:border-blue2 "
              key={link.title}
              to={`${link.route}/`}
            >
              {link.title}
            </Link>
          ))}
          <div className="hidden lg:block">
            <a
              className="border-2 border-white text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-black lg:ml-6 lg:mr-4 transition duration-500"
              href="tel:+14503573127"
            >
              450.357.3127
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
