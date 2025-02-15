/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../components/Button";

import homePageData from "../data/homePageData";

export default function HomePage() {
  const { logo, heading, heroImage, description, buttonText, buttonLink } =
    homePageData;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-green-800 py-16 w-screen min-h-screen">
      <div className="flex flex-col lg:w-[60vw] md:w-[80vw] w-full min-h-screen items-center justify-between gap-6 py-8">
        {/* Logo Image */}
        <img src={logo} alt="Logo" className="w-48" />

        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:w-[60%] md:w-[70%] w-[90%]">
          {heading}
        </h1>

        {/* Hero Image */}
        {/* <img
          src={heroImage}
          alt="Hero image"
          className="md:w-[70%] w-[90%] rounded-2xl"
        /> */}

        {/* Description Text */}
        <p className="md:text-2xl text-xl font-semibold text-gray-500 text-center md:p-4 p-2 lg:w-[72%]">
          {description}
        </p>

        {/* Button */}
        <div className="w-[95vw] md:w-[60%]">
          <Button text={buttonText} link={buttonLink} />
        </div>
      </div>
    </div>
  );
}
