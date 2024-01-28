interface CardProps {
  cardImg: string;
  hover: string;
  titulo: string;
  label: string;
}

function PopularCard({ cardImg, hover, titulo, label }: CardProps) {
  return (
    <div>
      <div className="card w-full ">
        <img src={cardImg} alt="" />
        <img src={hover} alt="" />
      </div>
      <h1 className="font-Russo text-2xl text-center py-3">{titulo}</h1>
      <p className="font-Klee text-xl">{label}</p>
    </div>
  );
}

export default PopularCard;
