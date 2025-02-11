/* eslint-disable no-unused-vars */

//Ainda sem uso esta página

import React from "react";
import Button from "../components/Button";
import ButtonOutline from "../components/ButtonOutline";

export default function TextImagePage() {
  return (
    <div className="flex flex-col items-center justify-center text-green-800 w-screen p-2">
      <div className="flex flex-col lg:w-[64vw] md:p-8 w-[95vw] h-screen items-center justify-between">
        <h2 className="lg:text-6xl md:text-4xl text-3xl font-bold uppercase md:text-center mt-3 text-black">
          Liberte o Seu Corpo da PRISÃO DO SOBREPESO e{" "}
          <span className="text-pink-600">Comece a Emagrecer Agora </span>
          com Nosso Plano Definitivo
        </h2>

        <p className="md:text-2xl text-xl font-semibold my-8 text-pink-500">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                <b>Guia Completo:</b> Método comprovado e passo a passo para
                emagrecer de forma definitiva.
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                <b>Dieta Personalizada:</b> Cardápio elaborado por profissionais
                para cada dia da semana, com foco na sua individualidade.
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                <b>Calendário de exercicios:</b> Saiba quais exercicios fazer
                para cada dia da semana.
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                <b>Calendário de Dieta:</b> Quais dias comer cada item do
                cardápio. Uma dieta SEM PASSAR FOME.
              </p>
            </li>
            <li className="flex gap-2 text-green-700">
              {" "}
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                <b>Video aula com Exercícios:</b> Treine no seu tempo e no
                conforto do seu lar, sem precisar de equipamentos ou academia.
              </p>
            </li>
            <li className="flex gap-2 text-green-700">
              <img src="/images/checkmark.webp" className="w-6 h-6" />
              <p>
                Tudo na sua <b>Área de Membros</b> da nossa Plataforma!
              </p>
            </li>
          </ul>
        </p>
        <div className="flex flex-col p-4">
          <h3 className="text-black font-bold text-2xl text-center">
            Exercicios Eficiêntes em Casa
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4 py-4 lg:w-[60vw]">
            <img
              src="/images/exercicios/1-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/2-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/3-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/4-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/5-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/6-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/7-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/8-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/9-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/10-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/11-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/12-1.gif"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
          </div>
          <h3 className="text-black font-bold text-xl text-center">
            E muito mais!
          </h3>
          <h3 className="text-pink-600 capitalize font-bold text-4xl text-center my-4">
            Dietas baratas e fáceis de seguir
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4 py-4 lg:w-[60vw]">
            <img src="/images/3.webp" alt="Dieta" className="lg:w-[25vw]" />
            <img src="/images/4.webp" alt="dieta" className="lg:w-[25vw]" />
          </div>
        </div>
        <img
          src="/images/selo-7d.svg"
          alt="Imagens sobre emagrecimento"
          className="md:mb-6 my-4 rounded-xl md:w-[40vw] lg:w-[20vw]"
        />
        <h2 className="text-3xl font-bold mt-3 text-black text-center">
          100% LIVRE DE RISCOS
        </h2>
        <p className="text-xl font-semibold text-center mt-4 lg:w-[50%] md:w-[70%]">
          <span className="text-pink-600">
            Garantia Incondicional Exclusiva <br />
            Olivia Wilson®
          </span>
        </p>

        <div className="flex flex-col py-4 w-full gap-3">
          {/* pagina de vendas */}
          <Button
            text="Seu Corpo dos Sonhos Está a Um Clique!"
            link="https://pay.kiwify.com.br/gtec5ZI"
          />
          <ButtonOutline
            text="Ainda Quero Saber Mais"
            link="https://oliviawilson.fitness/"
          />
        </div>
        <p className="text-xl pb-12 text-center">
          Essa Oferta Expira em Instantes. Aproveite!
        </p>
      </div>
    </div>
  );
}
