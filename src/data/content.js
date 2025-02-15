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
      img: "../../images/bday.webp",
    },
    {
      title: "Como você se sente ao escolher roupas em uma loja?",
      options: [
        { text: "Sempre acho roupas que gosto e servem bem." },
        { text: "Escolho as que cabem, não as que realmente gosto." },
        { text: "Evito comprar roupas por vergonha de experimentar." },
        { text: "Prefiro não ir a lojas para evitar frustrações." },
      ],
      img: "../../images/shopping.webp",
    },

    {
      title: "Qual o impacto do seu peso na sua saúde?",
      options: [
        { text: "Estou bem, mas preocupado com o futuro." },
        { text: "Tenho sentido cansaço e dores constantes." },
        { text: "Já tenho problemas como diabetes ou hipertensão." },
        { text: "Estou constantemente no limite da exaustão." },
      ],
      img: "../../images/fat.webp",
    },
    {
      title: "Como é sua relação com a alimentação?",
      options: [
        { text: "Planejada e saudável." },
        { text: "Desorganizada, muitas vezes como o que aparece." },
        { text: "Dependo de comida para lidar com o estresse." },
        { text: "Como sem perceber, principalmente em momentos de ansiedade." },
      ],
      img: "../../images/blender.webp",
    },
    {
      title: "Você já deixou de fazer algo por vergonha do seu corpo?",
      options: [
        { text: "Não." },
        { text: "Algumas vezes." },
        { text: "Frequentemente." },
        { text: "Sim, muitas oportunidades foram perdidas por isso." },
      ],
      img: "../../images/scale2.webp",
    },
    {
      title: "Qual é sua maior dificuldade em emagrecer?",
      options: [
        { text: "Seguir uma dieta consistente." },
        { text: "Fazer exercícios regularmente." },
        { text: "Focar nos resultados e evitar recaídas." },
        { text: "Ter força de vontade para começar." },
      ],
      img: "../../images/exercise.webp",
    },
    {
      title: "Você acredita que seu peso afeta sua autoestima?",
      options: [
        { text: "Não muito." },
        { text: "Bastante." },
        { text: "Me sinto péssimo(a) na maior parte do tempo." },
        { text: "Evito pensar nisso, mas sei que afeta minha vida." },
      ],
      img: "../../images/fat-mirrow.webp",
    },
    {
      title: "Como você avalia sua alimentação no dia a dia?",
      options: [
        { text: "Bem equilibrada." },
        { text: "Rica em alimentos ultraprocessados e açúcares." },
        { text: "Descontrolada, principalmente em momentos de estresse." },
        { text: "Quase sempre baseada em fast food ou comidas prontas." },
      ],
      img: "../../images/fat-eating.webp",
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
      img: "../../images/fat-social-media.webp",
    },
    {
      title: "Quantos Kg você precisa perder?",
      options: [
        { text: "2kg-10kg" },
        { text: "11kg-20kg" },
        { text: "21kg-30kg" },
        { text: "+30kg" },
      ],
      img: "../../images/scale.webp",
    },
  ],
};

export default content;
