/* eslint-disable no-unused-vars */

// Irmão, aqui vc tem que Alterar os textos e imagens. Eu fiz baseado no meu produto. Mas é simples. Só mudar o estilo e os links.
// Perceba que o link do botão vai pra minha página de vendas. No teste AB, vou usar outro endereço para página de pagamento

import React from "react";
import Button from "../components/Button";

export default function ResultPage() {
  return (
    <div className="flex flex-col items-center justify-center text-green-800 w-screen pb-4 w-screen min-h-screen">
      <div className="flex flex-col lg:w-[60vw] md:p-8 w-[95vw] h-screen items-center justify-between">
        <h2 className="text-4xl font-bold mt-3 text-pink-500 uppercase">
          Resultado
        </h2>
        <p className="text-xl font-semibold mb-4 mt-4 text-center lg:w-[50%] md:w-[70%]">
          Sua jornada está prestes a COMEÇAR! 💪 <b>Revelamos os segredos</b>{" "}
          que vão te levar à sua melhor versão. Acesse nossa surpresa,{" "}
          <b>NÃO DESISTA</b> e vamos juntos!
        </p>
        <p className="md:text-2xl text-xl font-semibold mb-4 text-pink-500">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <img src="/images/check.webp" className="w-6 h-6" />
              Dieta Sem Fome
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Exercícios Simples
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Sem Academia
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Cardápio Completo da Semana
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Calendário de Refeições
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Exercícios em Vídeo
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/check.webp" className="w-6 h-6" />
              Calendário de Exercícios
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/x.webp" className="w-6 h-6" />
              Dieta Restritiva
            </li>
            <li className="flex gap-2">
              {" "}
              <img src="/images/x.webp" className="w-6 h-6" />
              Academia e Dor no Corpo
            </li>
          </ul>
        </p>
        <p className="md:text-2xl text-xl font-semibold mb-8 mt-4 text-center lg:w-[50%] md:w-[70%]">
          Imagine como você se sentirá com o corpo dos seus sonhos! 😍 Não deixe
          essa chance passar.<b> Clique agora e descubra seu próximo passo!</b>
        </p>
        <Button text="Descubra Seu Próximo Passo Agora!" link="/text-image" />
        <p className="text-xl mt-4 text-center lg:w-[50%] md:w-[70%]">
          Pare de adiar! 🚫 Sua transformação é totalmente possível.
        </p>
        <p className="text-xl text-center lg:w-[50%] md:w-[70%] mb-4">
          Te entregaremos o plano exato que você precisa para decolar!
        </p>
      </div>
    </div>
  );
}
