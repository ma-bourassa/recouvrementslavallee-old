import React from "react";

import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import SEO from "../components/Seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <section className="mt-10 container mx-auto px-4 py-8 text-center">
        <div className="max-w-auto mx-auto">
          <div className="lg:max-w-lg mx-auto">
            <svg className="fill-current text-gray-400" viewBox="0 0 445 202" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M137.587 154.953h-22.102V197h-37.6v-42.047H.53v-33.557L72.36 2.803h43.125V124.9h22.102v30.053zM77.886 124.9V40.537L28.966 124.9h48.92zm116.707-23.718c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm221.824 154.711h-22.102V197h-37.6v-42.047h-77.355v-33.557l71.83-118.593h43.125V124.9h22.102v30.053zM384.882 124.9V40.537l-48.92 84.363h48.92z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <h1 className="mt-8 uppercase text-xl lg:text-4xl font-black">Désolé, cette page est introuvable.</h1>
          <p className="mt-6 text-xl text-gray-900">Vous pouvez nous en faire part en communiquant avec nous.</p>
          <Link className="btn btn-blue mt-8 inline-block" to="/">
            Retour
          </Link>
        </div>
      </section>
    </Layout>
  );
}
