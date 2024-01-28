import { useState } from "react";
import { NarutoSabioAvif } from "../assets/images";
import LogroCambio from "./reusables/LogroCambio";
import { LogrosURl } from "../constants";

function Logros() {
  const [imagenes, setImagenes] = useState(NarutoSabioAvif);
  return (
    <section className="mt-56">
      <div className="flex items-center w-[95%] mx-auto gap-16 max-md:flex-col">
        <div className="leading-9">
          <h1 className=" text-center text-orange-600 font-Russo text-4xl">
            Logros y reconocimientos
          </h1>
          <div className="bg-orange-600/30 shadow-2xl rounded-xl my-8 py-8">
            <h3 className="font-Russo text-xl text-center">Ascenso a Hokage</h3>
            <p className="font-Klee w-[80%] mx-auto text-xl leading-9">
              Lograr su sueño de convertirse en el Séptimo Hokage significó el
              culmen de una travesía épica llena de desafíos y triunfos.
            </p>
          </div>
          <div className="bg-orange-600/30 shadow-2xl rounded-xl my-8 py-8">
            <h3 className="font-Russo text-xl text-center">
              Impacto en la guerra
            </h3>
            <p className="font-Klee w-[80%] mx-auto text-xl leading-9">
              Su liderazgo y valentía sobresalieron durante la Cuarta Gran
              Guerra Ninja, marcando la historia con su legado imborrable.
            </p>
          </div>
          <div className="flex gap-16 place-items-center w-[95%] mx-auto ">
            {LogrosURl.map((img) => (
              <LogroCambio
                key={img.ImgUrl}
                setImagenes={setImagenes}
                imagenes={imagenes}
                {...img}
              />
            ))}
          </div>
        </div>
        <div className="bg-logro bg-cover bg-no-repeat h-[700px] rounded-4xl ">
          <div>
            <img
              src={imagenes}
              alt="leroImg"
              className="h-[700px] w-[1000px] p-6"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Logros;
