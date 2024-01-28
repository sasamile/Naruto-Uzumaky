import { Home } from "../../constants";

interface NavbarProps {
  hambur: boolean;
}

function NavbarModal({ hambur }: NavbarProps) {
  return (
    <>
      {hambur && (
        <aside className={`md:${hambur && "hidden"} bg-gradient-to-t  from-orange-600/50 to-black/50 text-white absolute inset-0 z-40 overflow-hidden`}>
          <div className="grid place-items-center mt-40">
            <ul className="grid place-items-center gap-8">
              {Home.map((item) => (
                <li key={item.hrfe} className="py-2 hover:font-Russo">
                  <a href={item.hrfe}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white rounded-xl py-2 px-3 my-12 hover:bg-white hover:text-black hover:font-bold hover:p-3">
              Explorar Mas
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export default NavbarModal;
