import { HeroImg } from "../assets/images";
import { Legado } from "../constants";

function Hero() {
  return (
    <section className="flex place-items-center gap-10 max-md:flex-col ">
      <div className="w-2/5 px-10 mt-28 leading-9 max-md:w-full ">
        <h1 className="text-orange-600 text-6xl font-bold font-Russo w-[600px] leading-[65px] max-md:text-6xl max-md:text-center max-md:w-full max-md:leading-[70px] max-sm:text-5xl ">
          Historia de Naruto <br />
          Uzumaky
        </h1>
        <p className="mt-10 font-Klee text-xl py-12">
          Naruto Uzumaky es un personaje icónico y carismático del anime y
          manga. Con su historia llena de valentía y determinación, Naruto ha
          cautivado a fans de todo el mundo.
        </p>

        <div className="flex gap-10 mt-10 max-md:justify-center">
          {Legado.map((lgd) => (
            <div key={lgd.label} >
              <h1 className="text-4xl text-orange-600 font-Russo text-center" >
                {lgd.capitulos}
              </h1>
              <h3 className="font-Klee">{lgd.label}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-fondo max-md:h-[600px] max-lg:h-[800px]   h-[700px] bg-no-repeat  bg-cover w-3/5 absolute top-0 right-0 -z-10 rounded-bl-4xl max-md:relative max-md:w-[100%] max-md:mx-auto max-md:rounded-none">
        <div className="bg-black/55 absolute inset-0 rounded-bl-4xl max-md:rounded-none">
          <img
            src={HeroImg}
            alt="naruto"
            className=" absolute bottom-0 h-[500px] rounded-bl-5xl max-md:rounded-none "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
