/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//Para alterar o estilo do botão é aqui

import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, link }) {
  return (
    <Link
      to={link}
      className="flex items-center justify-center bg-green-600 text-white md:px-4 md:py-4 px-3 py-4 md:text-xl text-lg rounded-2xl text-center w-full hover:bg-green-700 transition font-semibold"
    >
      {text}
    </Link>
  );
}
