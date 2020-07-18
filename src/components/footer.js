import React from "react";
import siteTitle from "./title";
import { Link } from "gatsby";
import logo from "../images/logo2_icon.png";

function Footer() {
  return (
    <footer className="bg-grey-dark">
      <section className="bg-grey">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6 ">
            <div className="flex-1 mb-4 md:mr-12">
              <Link to="/">
                <img className="object-scale-down h-24 md:h-24" src={logo} alt={siteTitle()} />
              </Link>
            </div>

            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    FAQ
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Help
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl flex flex-wrap md:justify-around p-6 mx-auto text-sm">
        <p className="flex flex-wrap text-white font-semibold">
          <span>{siteTitle()}&nbsp;</span>
          <span>&copy; {new Date().getFullYear()} Tous droits réservés.</span>
        </p>
        <p className="text-white font-semibold">
          Site web réalisé par{` `}
          <a href="https://github.com/ma-bourassa" target="_blank" rel="noopener noreferrer">
            Marc-Andre Bourassa
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
