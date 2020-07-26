import React from "react";

import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Success() {
  return (
    <Layout>
      <section className="mt-10 container mx-auto px-4 py-8 text-center">
        <div className="max-w-auto mx-auto">
          <FontAwesomeIcon icon="check-circle" size="10x" color="green" />
          <div className="md:max-w-lg mx-auto"></div>
          <h1 className=" font-bold text-2xl md:text-4xl mt-6 mb-2">Merci !</h1>
          <p className="mt-6 text-xl text-gray-900">Nous communiquerons avec vous dans les plus brefs délais.</p>
          <Link className="btn btn-blue mt-8 inline-block" to="/">
            Retour
          </Link>
        </div>
      </section>
    </Layout>
  );
}
