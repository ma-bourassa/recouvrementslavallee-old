import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import siteTitle from "./title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data.logo);

  return (
    <header className="bg-grey-dark">
      <div className="flex flex-wrap items-end md:items-center justify-between px-2 py-4 md:justify-around">
        <Link className="w-4/5 md:w-1/4 px-2" to="/">
          <Img alt={siteTitle()} fluid={data.logo.childImageSharp.fluid}></Img>
        </Link>

        <button className="w-1/5 text-white  md:hidden" onClick={() => toggleExpansion(!isExpanded)}>
          <FontAwesomeIcon icon="bars" size="2x" color="white" />
        </button>
        <nav className={`${isExpanded ? `block` : `hidden`}  mt-2 md:flex md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/`,
              title: `Accueil`,
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
              className="block px-4 py-3 text-white border-t-2 md:border-t-0 text-lg font-semibold md:inline-block hover:bg-grey-darker"
              activeClassName="md:border-b-2 md:border-blue2 "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <div className="hidden md:block">
            <a
              className="border border-white text-white text-lg font-semibold py-3 px-4 rounded-full hover:bg-white hover:text-black md:ml-6 md:mr-4"
              href="tel:+14503573127"
            >
              450.357.3127
            </a>
            <a
              className="border border-white text-white text-lg font-semibold py-3 px-4 rounded-full hover:bg-white hover:text-black "
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
