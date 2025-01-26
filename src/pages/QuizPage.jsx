/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import content from "../data/content";
import Button from "../components/Button";

export default function QuizPage() {
  const { id } = useParams();
  const pageIndex = parseInt(id) - 1;
  const pageData = content.quizPages[pageIndex];

  // If pageData is undefined (e.g., user manually enters an out-of-range URL), render nothing or handle as you prefer
  if (!pageData) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center text-green-800 w-screen pb-16">
      <div className="flex flex-col lg:w-[60vw] md:p-8 w-[95vw] h-screen items-center justify-around">
        <img src="/public/1.webp" alt="Logo" className="p-4 w-48" />
        <img
          src={pageData.img}
          alt="Imagens sobre emagrecimento"
          className="md:mb-6 mb-2 rounded-xl md:w-[50vw] lg:w-[30vw]"
        />
        <h2 className="md:text-4xl text-2xl w-full font-bold md:mb-4 mb-2 text-center">
          {pageData.title}
        </h2>

        <div
          className={`${
            pageIndex % 2 === 0
              ? "grid grid-cols-2 gap-4 w-full"
              : "grid grid-cols-1 gap-4 w-full"
          } w-3/4`}
        >
          {pageData.options.map((option, index) => {
            // Check if it's the last quiz page
            const isLastPage = pageIndex === content.quizPages.length - 1;
            // If it's the last page, link to /result; otherwise, go to the next page
            const linkPath = isLastPage ? "/result" : `/quiz/${pageIndex + 2}`;

            return <Button key={index} text={option.text} link={linkPath} />;
          })}
        </div>
      </div>
    </div>
  );
}
