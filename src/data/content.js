/* 
Se quiser reduzir a quantidade de páginas, só remover essas seções de dados:
Irmão, aqui você vai alterar as perguntas e as respostas...

   {
      title: "Perguntas vem aqui",
      options: [
        { text: "Resposta 1" },
        { text: "Resposta 2" },
        { text: "Resposta 3" },
        { text: "Resposta 4" },
      ],
      img: "../../images/endereço_da_imagem.webp",
    },

 E ai pode alterar os dados das que vc quiser continuar

 A quantidade de páginas será a quantidade dessas seções de dados. E o último botão será sempre da página de Resultados (ResultPage.jsx)

 */
const content = {
  quizPages: [
    {
      title: "Qual sua idade?",
      options: [
        { text: "18-29" },
        { text: "30-39" },
        { text: "40-49" },
        { text: "+50" },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Como você se sente ao escolher roupas em uma loja?",
      options: [
        { text: "Sempre acho roupas que gosto e servem bem." },
        { text: "Escolho as que cabem, não as que realmente gosto." },
        { text: "Evito comprar roupas por vergonha de experimentar." },
        { text: "Prefiro não ir a lojas para evitar frustrações." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Quanto tempo você já tentou emagrecer sem sucesso?",
      options: [
        { text: "Alguns meses." },
        { text: "Alguns anos." },
        { text: "Nunca tentei seriamente, mas sempre penso nisso." },
        { text: "Nunca tentei porque não sei por onde começar." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Qual o impacto do seu peso na sua saúde?",
      options: [
        { text: "Estou bem, mas preocupado com o futuro." },
        { text: "Tenho sentido cansaço e dores constantes." },
        { text: "Já tenho problemas como diabetes ou hipertensão." },
        { text: "Estou constantemente no limite da exaustão." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Como é sua relação com a alimentação?",
      options: [
        { text: "Planejada e saudável." },
        { text: "Desorganizada, muitas vezes como o que aparece." },
        { text: "Dependo de comida para lidar com o estresse." },
        { text: "Como sem perceber, principalmente em momentos de ansiedade." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Você já deixou de fazer algo por vergonha do seu corpo?",
      options: [
        { text: "Não." },
        { text: "Algumas vezes." },
        { text: "Frequentemente." },
        { text: "Sim, muitas oportunidades foram perdidas por isso." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Qual é sua maior dificuldade em emagrecer?",
      options: [
        { text: "Seguir uma dieta consistente." },
        { text: "Fazer exercícios regularmente." },
        { text: "Focar nos resultados e evitar recaídas." },
        { text: "Ter força de vontade para começar." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Você acredita que seu peso afeta sua autoestima?",
      options: [
        { text: "Não muito." },
        { text: "Bastante." },
        { text: "Me sinto péssimo(a) na maior parte do tempo." },
        { text: "Evito pensar nisso, mas sei que afeta minha vida." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Como seria sua vida se você perdesse o peso que deseja?",
      options: [
        { text: "Melhor, mas não sei se faria tanta diferença." },
        { text: "Seria incrível, mas parece um sonho distante." },
        { text: "Totalmente transformada, com mais energia e confiança." },
        { text: "Finalmente viveria sem limitações ou vergonha." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Quando você pensa no futuro, como imagina sua saúde?",
      options: [
        { text: "Saudável, mesmo sem grandes mudanças." },
        { text: "Preocupante, se não mudar agora." },
        { text: "Em risco, tenho medo do que pode acontecer." },
        { text: "Comprometida, se continuar nesse ritmo." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Como você avalia sua alimentação no dia a dia?",
      options: [
        { text: "Bem equilibrada." },
        { text: "Rica em alimentos ultraprocessados e açúcares." },
        { text: "Descontrolada, principalmente em momentos de estresse." },
        { text: "Quase sempre baseada em fast food ou comidas prontas." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Você acredita que é possível emagrecer sem sofrer?",
      options: [
        { text: "Talvez, mas tenho dúvidas." },
        { text: "Não acredito, sempre foi difícil pra mim." },
        { text: "Sim, se eu encontrar o método certo." },
        { text: "Acho que é possível, mas nunca tentei algo eficiente." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "O que mais te impede de começar uma mudança?",
      options: [
        { text: "Falta de tempo." },
        { text: "Falta de motivação." },
        { text: "Não sei por onde começar." },
        { text: "Medo de fracassar novamente." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Como você lida com seu corpo nas redes sociais?",
      options: [
        { text: "Me sinto confortável postando fotos." },
        { text: "Posto raramente por vergonha." },
        { text: "Evito completamente aparecer." },
        {
          text: "Apenas compartilho fotos antigas, quando eu era mais magro(a).",
        },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Qual é o seu maior medo relacionado ao seu peso?",
      options: [
        { text: "Prejudicar minha saúde no futuro." },
        { text: "Nunca conseguir me sentir bem comigo mesmo." },
        { text: "Sofrer preconceito ou rejeição." },
        { text: "Não poder acompanhar a vida ativa dos meus filhos ou netos." },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
    {
      title: "Quantos Kg você precisa perder?",
      options: [
        { text: "2kg-10kg" },
        { text: "11kg-20kg" },
        { text: "21kg-30kg" },
        { text: "+30kg" },
      ],
      img: "../../images/beautiful-woman-are-exercising-with-yoga-gym_40919-198.webp",
    },
  ],
};

export default content;
