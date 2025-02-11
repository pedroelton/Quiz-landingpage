/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../components/Button";

import homePageData from "../data/homePageData";

export default function HomePage() {
  const { logo, heading, heroImage, description, buttonText, buttonLink } =
    homePageData;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-green-800 py-16 w-screen min-h-screen">
      <div className="flex flex-col lg:w-[60vw] md:w-[80vw] w-full min-h-screen items-center justify-around">
        {/* Logo Image */}
        <img src={logo} alt="Logo" className="mb-4 w-48" />

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-center lg:w-[50%] md:w-[70%] w-[90%]">
          {heading}
        </h1>

        {/* Hero Image */}
        <img
          src={heroImage}
          alt="Hero image"
          className="mb-4 md:w-[70%] w-[90%] rounded-2xl"
        />

        {/* Description Text */}
        <p className="md:text-2xl text-xl mb-4 font-semibold text-gray-500 text-center md:p-4 p-2">
          {description}
        </p>

        {/* Button */}
        <Button text={buttonText} link={buttonLink} />
      </div>
    </div>
  );
}
