import React from "react";
import siteTitle from "./title";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer>
      <section className="bg-grey text-white">
        <div className="w-full md:px-24 mx-auto">
          <div className="flex flex-col justify-center md:flex-row ">
            <div className="w-full py-6 px-4 md:px-10 text-center">
              <Link to="/">
                <Img
                  className="w-1/2 sm:w-1/3 md:w-1/2 mx-auto"
                  alt={siteTitle()}
                  fluid={data.logo.childImageSharp.fluid}
                ></Img>
              </Link>
              <ul className="mt-4 list-none md:text-lg leading-loose">
                <li>
                  <FontAwesomeIcon className="mr-2" icon="phone-alt" />
                  <a className="font-semibold" href="tel:+14503573127">
                    450-357-3127
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="mr-2" icon="phone-alt" />
                  <a className="font-semibold" href="tel:+15147933743">
                    514-793-3743
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="mr-2" icon="envelope" />
                  <a className="font-semibold text-sm md:text-base" href="mailto:lesrecouvrementslavallee@gmail.com">
                    lesrecouvrementslavallee@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold"
                    href="https://www.facebook.com/Les-recouvrements-de-sols-Andr%C3%A9-Lavall%C3%A9einc-135823087133035"
                  >
                    {" "}
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" className="mt-2" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full bg-blue2 py-6 px-6 md:px-10 al">
              <p className="text-center font-semibold text-lg">Accréditations</p>
              <ul className="p-2 list-disc leading-relaxed max-w-2xl mx-auto">
                <li className="mt-2">
                  <div>
                    <span>Numéro de licence de la Régie du bâtiment du Québec </span>
                    <a href="https://www.rbq.gouv.qc.ca/" target="_blank" rel="noopener noreferrer">
                      (<span className="underline">RBQ</span>)
                    </a>
                    <span className="font-semibold"> : 8112-2350-26</span>
                  </div>
                </li>
                <li className="mt-4">
                  <div>
                    <span>Membre de l’Association provinciale des constructeurs d’habitations du Québec </span>
                    <a href="https://www.apchq.com/" target="_blank" rel="noopener noreferrer">
                      (<span className="underline">APCHQ</span>)
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full py-6 px-6 md:px-10 text-center ">
              <p className="text-center font-semibold text-lg">Navigation</p>

              <nav className={`mt-2 leading-loose items-center`}>
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
                  <Link className="block hover:text-blue2" key={link.title} to={link.route}>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey-dark p-4 text-sm">
        <div className="container mx-auto flex flex-wrap md:justify-around leading-relaxed">
          <p className="flex flex-wrap text-white font-semibold">
            <span>{siteTitle()}&nbsp;</span>
            <span>&copy; {new Date().getFullYear()} Tous droits réservés.</span>
          </p>
          <p className="text-white font-semibold">
            Site web réalisé par{` `}
            <a href="https://github.com/ma-bourassa" target="_blank" rel="noopener noreferrer">
              Marc-André Bourassa
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
