import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import siteTitle from "../title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { slugify } from "../../utils/string-utils";

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "recouvrementslavallee-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      produits: markdownRemark(fields: { sourceName: { eq: "produits" } }) {
        frontmatter {
          produits {
            title
          }
        }
      }
    }
  `);
  const logo = data.logo.childImageSharp.fluid;
  const products = data.produits.frontmatter.produits.map((product) => product.title);
  return (
    <header className="bg-grey-dark">
      <div className="flex flex-wrap items-baseline lg:items-center justify-between px-2 py-4 lg:justify-around">
        <Link className="w-4/5 lg:w-1/4 px-2" to="/">
          <Img alt={siteTitle() + " Logo"} fluid={logo}></Img>
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
              route: `/`,
              title: `Accueil`,
            },
            {
              route: `/produits/`,
              title: `Produits`,
              dropdown: products,
            },
            {
              route: `/realisations/`,
              title: `Réalisations`,
            },
            {
              route: `/promotions/`,
              title: `Promotions`,
            },
            {
              route: `/contactez-nous/`,
              title: `Contactez-nous`,
            },
          ].map((link) => (
            <div key={link.title} className="group block text-white text-lg lg:inline-block border-t-2 lg:border-t-0">
              <button className="px-4 py-3 font-semibold hover:bg-grey-darker transition duration-500 inline-flex w-full items-center">
                <Link activeClassName="lg:border-b-2 lg:border-blue2" to={`${link.route}`}>
                  {link.title}
                </Link>
                {link.dropdown && (
                  <svg className="ml-1 fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                )}
              </button>
              <ul className="absolute hidden z-10 pt-1 group-hover:block ">
                {link.dropdown &&
                  link.dropdown.map((item) => (
                    <AnchorLink key={item} to={`${link.route}#${slugify(item)}`} title={item} className="w-full">
                      <li className="list-none px-4 py-3 border-t bg-grey-dark hover:bg-grey-darker transition duration-200">
                        <span>{item}</span>
                      </li>
                    </AnchorLink>
                  ))}
              </ul>
            </div>
          ))}
          <a
            className="block lg:hidden px-4 py-3  text-white border-t-2 lg:border-t-0 text-lg font-semibold hover:bg-grey-darker transition duration-500"
            href="tel:+14503573127"
          >
            <FontAwesomeIcon className="mr-2" icon="phone-alt" />
            450.357.3127
          </a>
          <div className="hidden lg:block">
            <a
              className="border-2 border-white text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-black lg:ml-6 lg:mr-4 transition duration-500"
              href="tel:+14503573127"
            >
              <FontAwesomeIcon className="mr-2" icon="phone-alt" />
              450.357.3127
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
