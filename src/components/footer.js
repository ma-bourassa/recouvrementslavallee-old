import React from "react";
import siteTitle from "./title";
import { Link } from "gatsby";
import logo from "../images/logo2_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

function Footer() {
  return (
    <footer>
      <section className="bg-grey text-white">
        <div className="md:px-24 mx-auto">
          <div className="w-full flex flex-col justify-center md:flex-row ">
            <div className=" py-10 pl-4 md:px-10">
              <Link to="/">
                <img className="object-scale-down h-24 md:h-24" src={logo} alt={siteTitle()} />
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
                  <a className="font-semibold" href="mailto:lesrecouvrementslavallee@gmail.com">
                    lesrecouvrementslavallee@gmail.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="mr-2" icon={["fab", "facebook"]} />
                  <a className="font-semibold" href="https://www.facebook.com/search/top?q=recouvrements%20lavallee">
                    facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-blue2 py-10 px-6 md:px-10">
              <p className="text-center font-semibold text-lg">Accéditations</p>
              <ul className="p-2 list-disc leading-relaxed">
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

            <div className="py-10 px-6 md:px-10">
              <nav className={`leading-loose items-center`}>
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
        <div className="container mx-auto flex flex-wrap md:justify-center">
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
