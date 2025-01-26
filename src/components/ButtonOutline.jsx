/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//Para alterar o estilo do botão é aqui

import React from "react";
import { Link } from "react-router-dom";

export default function ButtonOutline({ text, link }) {
  return (
    <Link
      to={link}
      className="flex items-center justify-center bg-transparent border-2 border-pink-600 text-pink-600 md:px-4 md:py-4 px-3 py-4 md:text-xl text-lg rounded-2xl text-center w-full hover:bg-pink-700 hover:text-white transition font-semibold"
    >
      {text}
    </Link>
  );
}
