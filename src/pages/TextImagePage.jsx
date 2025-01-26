/* eslint-disable no-unused-vars */

//Ainda sem uso esta página

import React from "react";
import Button from "../components/Button";

export default function TextImagePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-grayGreen text-darkGreen">
      <img src="/assets/images/logo.png" alt="Logo" className="mb-8 w-24" />
      <img
        src="/assets/images/information.png"
        alt="Information"
        className="mb-6"
      />
      <p className="text-lg mb-8">Informações importantes sobre sua saúde.</p>
      <Button text="Finalizar Quiz" link="/result" />
    </div>
  );
}
