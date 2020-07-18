import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Home" />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">Page test</h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
