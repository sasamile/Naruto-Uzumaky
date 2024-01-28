import {
  CardKakashi,
  CardNaruto,
  CardSakura,
  CardSasuke,
  HoverCardSasuke,
  HoverKakashi,
  HoverNaruto,
  HoverSakura,
  NarutoHokage,
  NarutoSabio,
} from "../assets/images";

export const Home = [
  { label: "Home", hrfe: "/home" },
  { label: "About Us", hrfe: "/AboutUs" },
  { label: "Products", hrfe: "/Products" },
  { label: "Contact", hrfe: "/Contact" },
];

export const Legado = [
  {
    capitulos: "700+",
    label: "Capitulos del Manga",
  },
  {
    capitulos: "19+",
    label: "Novelas Ligeras",
  },
];

export const Card = [
  {
    cardImg: CardSasuke,
    hover: HoverCardSasuke,
    titulo: "Sasuke Uchiha",
    label:
      "Posee el Sharingan y, más adelante, el Rinnegan. Es un hábil usuario del Taijutsu y del Ninjutsu, con un enfoque en las técnicas de rayo.",
  },
  {
    cardImg: CardSakura,
    hover: HoverSakura,
    titulo: "Sakura Haruno",
    label:
      "Desarrolla habilidades médicas y fuerza física. Utiliza el chakra para fortalecer sus habilidades físicas y curativas.",
  },
  {
    cardImg: CardNaruto,
    hover: HoverNaruto,
    titulo: "Naruto Uzumaki",
    label:
      "Jinchuriki del Zorro de Nueve Colas (Kurama), utiliza el chakra del zorro para realizar técnicas poderosas. Especialista en técnicas de clonación y Rasengan.",
  },
  {
    cardImg: CardKakashi,
    hover: HoverKakashi,
    titulo: "Kakashi Hatake",
    label:
      "Junto a Kakashi sensei, formaron un equipo inquebrantable que enfrentó desafíos insuperables con confianza y valentía.",
  },
];

export const LogrosURl = [{ ImgUrl: NarutoSabio }, { ImgUrl: NarutoHokage }];
