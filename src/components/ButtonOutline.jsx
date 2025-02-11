/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ButtonOutline({ text, link }) {
  const isExternal = link.startsWith("http");

  useEffect(() => {
    if (isExternal) {
      const linkElement = document.createElement("link");
      linkElement.rel = "prefetch";
      linkElement.href = link;
      document.head.appendChild(linkElement);
    }
  }, [link, isExternal]);

  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-transparent border-2 border-pink-600 text-pink-600 md:px-4 md:py-4 px-3 py-4 md:text-xl text-lg rounded-2xl text-center w-full hover:bg-pink-700 hover:text-white transition font-semibold"
    >
      {text}
    </a>
  ) : (
    <Link
      to={link}
      className="flex items-center justify-center bg-transparent border-2 border-pink-600 text-pink-600 md:px-4 md:py-4 px-3 py-4 md:text-xl text-lg rounded-2xl text-center w-full hover:bg-pink-700 hover:text-white transition font-semibold"
    >
      {text}
    </Link>
  );
}
