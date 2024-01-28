
import { Logo, LogoAvif } from "../assets/images";
import { Home } from "../constants";
import { Close, Hamburger } from "../assets/icons";
import NavbarModal from "./reusables/NavbarModal";

interface NavbarProps{
  hambur:boolean
  setHambur:(value:boolean)=>void
}

function Navbar({hambur,setHambur}:NavbarProps) {
  

  const Handleclik = () => {
    if (hambur) {
      return setHambur(false);
    }
    setHambur(true);
  };

  return (
    <header>
      <nav className="flex justify-between mx-7 mt-4 max-sm:mx-3">
        <div >
          <img src={LogoAvif} alt="logo" width={250} />
        </div>
        <div className="flex gap-8 max-md:hidden">
          <ul className="flex place-items-center gap-10 text-white font-Klee ">
            {Home.map((item) => (
              <li key={item.hrfe} className="nav-link relative py-2">
                <a href={item.hrfe}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="bg-orange-600 text-white   rounded-xl my-9 px-3">
            Explorar Mas
          </button>
        </div>
        <div className="md:hidden flex items-center relative z-50 ">
          <button onClick={Handleclik} className="bg-white rounded-2xl">
            <img src={hambur ? Close : Hamburger} alt="" width={50} />
          </button>
        </div>
      </nav>
      <NavbarModal hambur={hambur} />
    </header>
  );
}

export default Navbar;
