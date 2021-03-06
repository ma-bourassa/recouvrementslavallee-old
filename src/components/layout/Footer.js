import React from "react";
import useSiteTitle from "../UseSiteTitle";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../utils/fontawesome";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "recouvrementslavallee-logo-alt.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
        frontmatter {
          phone
        }
      }
    }
  `);
  const phone = data.markdownRemark.frontmatter.phone;
  return (
    <footer>
      <section className="bg-grey text-white">
        <div className="w-full lg:px-24 mx-auto">
          <div className="flex flex-col justify-center lg:flex-row ">
            <div className="w-full py-6 px-4 lg:px-10 text-center">
              <Link to="/">
                <Img
                  className="w-1/2 sm:w-1/3 lg:w-1/2 xl:w-1/3 mx-auto"
                  alt={useSiteTitle() + " Logo"}
                  fluid={data.logo.childImageSharp.fluid}
                ></Img>
              </Link>
              <ul className="mt-4 list-none lg:text-lg leading-loose">
                <li className="py-2">
                  <FontAwesomeIcon className="mr-2" icon="phone-alt" />
                  <a className="text-xl font-semibold" href={`tel:+1-${phone}`}>
                    {phone}
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Facebook"
                    className="font-semibold"
                    href="https://www.facebook.com/Les-recouvrements-de-sols-Andr%C3%A9-Lavall%C3%A9einc-135823087133035"
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" className="mt-2" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full bg-blue-700 py-6 px-6 lg:px-10 al">
              <p className="text-center font-semibold text-lg">Accr??ditations</p>
              <ul className="p-2 list-disc leading-relaxed max-w-2xl mx-auto">
                <li className="mt-2">
                  <div>
                    <span>Num??ro de licence de la R??gie du b??timent du Qu??bec </span>
                    <a href="https://www.rbq.gouv.qc.ca/" target="_blank" rel="noopener noreferrer">
                      (<span className="underline">RBQ</span>)
                    </a>
                    <span className="font-semibold"> : 8112-2350-26</span>
                  </div>
                </li>
                <li className="mt-4">
                  <div>
                    <span>Membre de l???Association provinciale des constructeurs d???habitations du Qu??bec </span>
                    <a href="https://www.apchq.com/" target="_blank" rel="noopener noreferrer">
                      (<span className="underline">APCHQ</span>)
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full py-6 px-6 lg:px-10 text-center ">
              <p className="text-center font-semibold text-lg">Navigation</p>

              <nav className={`mt-2 leading-loose items-center`}>
                {[
                  {
                    route: `/`,
                    title: `Accueil`,
                  },
                  {
                    route: `/produits/`,
                    title: `Produits
                    `,
                  },
                  {
                    route: `/realisations/`,
                    title: `R??alisations`,
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
                  <Link className="py-2 lg:py-0 block hover:text-blue-600" key={link.title} to={link.route}>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey-dark p-4 text-sm">
        <div className="container mx-auto flex flex-wrap lg:justify-around leading-relaxed">
          <p className="flex flex-wrap text-white font-semibold">
            <span>{useSiteTitle()}&nbsp;</span>
            <span>&copy; {new Date().getFullYear()} Tous droits r??serv??s.</span>
          </p>
          <p className="text-white font-semibold">
            Site web r??alis?? par{` `}
            <a href="https://www.linkedin.com/in/boumar04/" target="_blank" rel="noopener noreferrer">
              Marc-Andr?? Bourassa
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
