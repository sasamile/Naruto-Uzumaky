import Button from "./Button";

interface LogroProps {
  setImagenes: (value: string) => void;
  imagenes: string;
  ImgUrl: string;
}

function LogroCambio({ setImagenes, imagenes, ImgUrl }: LogroProps) {
  const handleClick = () => {
    setImagenes(ImgUrl);
  };
  return (
    <Button
      classButton={`${
        imagenes === ImgUrl && "border-orange-600"
      } border-2 rounded-5xl bg-fondo h-[150px] w-[150px]`}
      Handleclik={handleClick}
    >
      <img src={ImgUrl} alt="" width={250} className="p-3" />
    </Button>
  );
}

export default LogroCambio;
