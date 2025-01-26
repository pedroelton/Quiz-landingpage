/* eslint-disable no-unused-vars */

// Ainda não sei se vou usar essa página, pensei em por junto com uns depoimentos antes da página de resultados.

import React from "react";
import Button from "../components/Button";

export default function BeforeAfterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-grayGreen text-darkGreen">
      <img src="/assets/images/logo.png" alt="Logo" className="mb-8 w-24" />
      <img
        src="/assets/images/before-after.png"
        alt="Before and After"
        className="mb-6"
      />
      <p className="text-lg mb-8">Veja os resultados impressionantes!</p>
      <Button text="Continuar" link="/text-image" />
    </div>
  );
}
