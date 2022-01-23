import React, { lazy, Suspense } from "react";
import "../styles/pages/index.scss";

const CreateEmployee = lazy(() => import("../components/CreateEmployee"));

const Index = () => (
  <Suspense fallback={renderLoader()}>
    <main>
      <section>
        <CreateEmployee />
      </section>
    </main>
  </Suspense>
);

const renderLoader = () => (
  <div className="loading">
    <p>Loading</p>
  </div>
);

export default Index;
