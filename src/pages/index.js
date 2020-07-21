import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

export default function IndexPage() {
  {
    /* style={{ backgroundImage: `url(${floorBg})` }} */
  }

  return (
    <Layout>
      <SEO title="Accueil" />
      <section className="bg-gray-100 mb-6 px-4 py-8 md:px-8 md:py-16 text-center">
        <h1 className=" font-bold text-2xl md:text-5xl">Vente et installation de plancher</h1>
        <hr className="hr" />
        <h4 className="md:max-w-3xl md:mx-auto text-lg md:text-2xl">Contactez nous pour une soumission</h4>
        <Link to="/contact/">
          <button className="mt-6 btn btn-blue text-xl rounded-full">Soumission</button>
        </Link>
      </section>
    </Layout>
  );
}
