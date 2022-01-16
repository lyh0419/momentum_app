const quotes = [
  {
    quote: "나를 죽이지 못하는 고통은, 나를 더 강하게 만든다.",
    author: "프리드리히 니체",
  },
  {
    quote: "고통없이 얻는건 없다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "젊음은 알지 못한 것을 탄식하고 나이는 하지 못한 것을 탄식한다.",
    author: "앙리 에스티엔",
  },
  {
    quote: "괴물과 싸우는 자는 스스로 괴물이 되지 않도록 조심해야 한다.",
    author: "프리드리히 니체",
  },
  {
    quote: "심연을 들여다 볼 땐, 심연 역시 그대를 들여다 본다.",
    author: "프리드리히 니체",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다. ",
    author: "알버트 아인슈타인",
  },
  {
    quote: "웃음은 강장제이고, 안정제이며, 진통제이다. ",
    author: "찰리 채플린",
  },
  {
    quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
    author: "토마스 A. 에디슨",
  },
  {
    quote: "우연이 아닌 선택이 운명을 결정한다.",
    author: "진 니데치",
  },
  {
    quote: "사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
    author: "벤자민 프랭클린",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
