import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
      <section className="bg-gray-100 mb-6 px-4 py-8 md:px-8 md:py-16">
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-2">Contactez-nous !</h1>
        <hr className="border-blue2 border-t-4 w-40 mx-auto" />
        <p className="text-center leading-loose md:max-w-3xl md:mx-auto">
          Pour toute demande au sujet de nos services, nos produit ou pour une estimation, veuillez remplir le
          formulaire ci-dessous. Nous communiquerons avec vous dans les plus bref délais.
        </p>
      </section>

      <section className="flex flex-wrap justify-start items-start max-w-6xl mx-auto my-6 ">
        <div className="w-full md:w-1/3 p-6">
          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Téléphones</h4>
            <ul className="list-none leading-relaxed text-blue2">
              <li>
                <a className="font-semibold underline" href="tel:+14503573127">
                  450-357-3127
                </a>
              </li>
              <li>
                <a className="font-semibold underline" href="tel:+15147933743">
                  514-793-3743
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Courriel</h4>
            <a className="font-semibold underline text-blue2" href="mailto:lesrecouvrementslavallee@gmail.com">
              lesrecouvrementslavallee@gmail.com
            </a>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Zone de service</h4>
            <ul className="font-semibold text-blue2 mb-2 leading-relaxed">
              <li>Montérégie</li>
              <li>Rive-sud de Montréal</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-xl font-bold mb-1">Adresse</h4>
            <p className=" mb-2 font-semibold text-blue2 ">
              166 rang Saint-André
              <br />
              Saint-Bernard-de-Lacolle QC
              <br />
              Canada J0J 1V0
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6">
          <form>
            <label className="block">
              <span className="text-gray-700 font-semibold">Nom *</span>
              <input className="form-input mt-1 mb-4 block w-full" />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">Téléphone *</span>
              <input className="form-input mt-1 mb-4 block w-full" />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">Courriel *</span>
              <input className="form-input mt-1 mb-4 block w-full" />
            </label>

            <label className="block">
              <span className="text-gray-700 font-semibold">Message</span>
              <textarea
                className="form-textarea  mt-1 mb-4 block w-full"
                id="message"
                placeholder="Précisez votre demande"
                rows="4"
              />
            </label>

            <button className="btn btn-blue">Envoyer</button>
          </form>
        </div>
      </section>
      <section className="w-full overflow-hidden rounded border">
        <iframe
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=166%20rang%20St-Andr%C3%A9%20St-Bernard%20de%20Lacolle%20+(My%20company)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
          frameBorder="0"
        ></iframe>
      </section>
    </Layout>
  );
}

export default ContactPage;
