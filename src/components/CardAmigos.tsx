import { Card } from "../constants";
import PopularCard from "./reusables/PopularCard";

function CardAmigos() {
  return (
    <section className="">
      <h1 className="text-center text-5xl py-5 font-Russo text-orange-600 mt-28 mb-12">
        Equipo 7
      </h1>
      <p className="text-center w-[90%] mx-auto font-Klee pb-9 text-xl">
      El Equipo 7 es un equipo de ninjas protagonista en la serie de anime y manga "Naruto". Está liderado por Naruto Uzumaki y está formado por tres miembros principales: Naruto, Sasuke Uchiha y Sakura Haruno. Aquí tienes información sobre cada miembro del Equipo 7:
      </p>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 w-[90%] mx-auto">
        {Card.map((card) => (
          <PopularCard key={card.label} {...card} />
        ))}
      </div>
    </section>
  );
}

export default CardAmigos;
