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
          <ul className="flex flex-col gap-8 pt-4">
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
        <div className="flex flex-col md:flex-row md:gap-16 gap-8 py-4">
          <div className="flex flex-col items-center">
            <h3 className="text-black font-bold text-2xl text-center">
              Cardápio com <br />
              50 páginas
            </h3>
            <img
              src="/images/Cardápio Olivia Wilson.webp"
              className="w-[240px] shadow-xl round"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-black font-bold text-2xl text-center">
              Guia completo de <br />
              Alimentação Saudável
            </h3>
            <img
              src="/public/images/E-book Alimentação Saudável - Este Guia vai te Ajudar.pdf.webp"
              className="w-[240px] shadow-xl pt-8 round"
            />
          </div>
        </div>
        <div className="flex flex-col p-4 mt-8">
          <h3 className="text-black font-bold text-2xl text-center">
            Exercicios em Casa
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4 py-4 lg:w-[60vw]">
            <img
              src="/images/exercicios/1-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/2-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/3-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/4-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/5-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/6-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/7-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/8-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/9-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/10-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/11-1.webp"
              alt="exercicios"
              className="lg:w-[25vw]"
            />
            <img
              src="/images/exercicios/12-1.webp"
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

        <div className="flex flex-col py-8 w-full justify-center items-center gap-4">
          <h2 className="text-5xl font-bold mt-4 text-black uppercase text-center">
            Vamos comparar?
          </h2>
          <p className="text-xl font-semibold text-center lg:w-[50%] md:w-[70%]">
            <span className="text-pink-600 text-2xl">
              <b>
                <u>SEM o programa completo Olivia Wilson®,</u>
              </b>{" "}
              veja abaixo qual seria o seu custo mensal (anual)
            </span>
            <ul className="flex flex-col gap-4 py-8 justify-center items-center">
              <li className="flex gap-2 text-green-700 ">
                <p>
                  💸<b className="text-black">Academia</b> -{" "}
                  <span className="line-through">R$200</span> por mês{" "}
                  <span className="line-through">(R$2.400 por ano)</span>
                </p>
              </li>
              <li className="flex gap-2 text-green-700">
                <p>
                  💸<b className="text-black">Personal Trainer</b> -{" "}
                  <span className="line-through">R$400</span> por mês{" "}
                  <span className="line-through">(R$4.800 por ano)</span>
                </p>
              </li>
              <li className="flex gap-2 text-green-700">
                <p>
                  💸<b className="text-black">Nutricionista</b> -{" "}
                  <span className="line-through">R$180</span> por consulta
                  <span className="line-through"> (R$2.160 por ano)</span>
                </p>
              </li>
            </ul>
          </p>
          <p className="text-2xl text-center">
            <b className="line-through">R$ 9.300,00 </b>😱 por ano! <br /> Ou{" "}
            <b className="line-through">R$780,00 </b>😭 por mês!
          </p>
          <div />

          <div className="flex flex-col  w-full gap-4">
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
        </div>

        <p className="text-xl pb-12 text-center">
          Essa Oferta Expira em Instantes. Aproveite!
        </p>
      </div>
    </div>
  );
}
