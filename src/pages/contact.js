import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Contact" />
      <section>
        {/*Title*/}
        <div className="w-full">
          <div className="mb-6">
            <h1 className=" text-2xl md:text-4xl pb-2">Contactez-nous !</h1>
            <p className="leading-loose ">
              Pour toute demande, veuillez nous contacter à l&apos;aide du formulaire ci-dessous.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-start items-start -mx-4">
        <div className="w-full md:w-1/2 p-4">
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
                className="w-full mb-4 form-textarea"
                id="message"
                placeholder="Précisez votre demande"
                rows="10"
              />
            </label>

            <button className="btn btn-blue btn-blue:hover">Envoyer</button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <p className="text-lg font-semibold">
            André Lavallée :{" "}
            <a className="font-bold" href="tel:+14503573127">
              (450) 357-3127
            </a>
          </p>
          <p className="text-lg font-semibold">
            Samuel Lavallée :{" "}
            <a className="font-bold" href="tel:+15147933743">
              (514) 793-3743
            </a>
          </p>

          <p className="text-black font-semibold mt-3 mb-1">Les recouvrements de sols André Lavallée Inc.</p>
          <p className="text-sm mb-2">
            166 rang Saint-André
            <br />
            Saint-Bernard-de-Lacolle QC
            <br />
            Canada J0J 1V0
          </p>

          <div className="overflow-hidden rounded border mb-6">
            <iframe
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=166%20rang%20St-Andr%C3%A9%20St-Bernard%20de%20Lacolle%20+(My%20company)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </Layout>
  );
}

export default ContactPage;
