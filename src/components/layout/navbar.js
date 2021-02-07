import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";
import { slugify } from "../../utils/string-utils";
import useSiteTitle from "../useSiteTitle";

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "recouvrementslavallee-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      products: markdownRemark(frontmatter: { templateKey: { eq: "products-page" } }) {
        frontmatter {
          products {
            title
          }
        }
      }
      phone: markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
        frontmatter {
          phone
        }
      }
    }
  `);
  const logo = data.file.childImageSharp.fluid;
  const products = data.products.frontmatter.products.map((product) => product.title);
  const phone = data.phone.frontmatter.phone;
  return (
    <header id="head" className="bg-grey-dark">
      <div className="flex flex-wrap items-baseline lg:items-center justify-between px-2 py-4 lg:justify-around">
        <Link className="w-4/5 lg:w-1/4 px-2" to="/">
          <Img alt={useSiteTitle() + " Logo"} fluid={logo}></Img>
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
            <div
              key={link.title}
              className="group relative block text-white text-lg lg:inline-block border-t-2 lg:border-t-0"
            >
              <Link
                className="px-4 py-3 font-semibold hover:bg-grey-darker transition duration-500 inline-flex w-full items-center justify-center"
                activeClassName="lg:border-b-2 lg:border-blue-700"
                to={`${link.route}`}
              >
                {link.title}
                {link.dropdown && <FontAwesomeIcon icon="angle-down" className="ml-2" color="white" />}
              </Link>

              <ul className="absolute hidden z-10 group-hover:block">
                {link.dropdown &&
                  link.dropdown.map((item) => (
                    <AnchorLink
                      key={item}
                      to={`${link.route}#${slugify(item)}`}
                      title={item}
                      stripHash
                      className="w-full"
                    >
                      <li className="list-none px-4 py-3 border-t border-grey-light bg-grey-dark hover:bg-grey-darker transition duration-200">
                        <span>{item}</span>
                      </li>
                    </AnchorLink>
                  ))}
              </ul>
            </div>
          ))}
          <a
            className="block lg:hidden px-4 py-3  text-white border-t-2 lg:border-t-0 text-lg font-semibold hover:bg-grey-darker transition duration-500 text-center"
            href={`tel:+1-${phone}`}
          >
            <FontAwesomeIcon className="mr-2" icon="phone-alt" />
            {phone}
          </a>
          <div className="hidden lg:block">
            <a
              className="border-2 border-white text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-black lg:ml-6 lg:mr-4 transition duration-500"
              href={`tel:+1-${phone}`}
            >
              <FontAwesomeIcon className="mr-2" icon="phone-alt" />
              {phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
