import { Link } from "react-router-dom";

const MemeCard = ({ img, name, id }) => {
  return (
    <Link
      to={`/templates/${id}`}
      className="flex flex-col justify-center  m-5 ##bg-[#4a525a] ##bg-[#222725] w-3/2 sm:w-1/4 lg:w-1/5 ##sm:h-[300px] overflow-hidden cursor-pointer hover:translate-y-2 duration-200 z-1 relative"
    >
      <div className="sm:h-[150px] flex flex-col justify-center overflow-hidden">
        <img className="w-full " src={img} alt={name} />
      </div>
      <h1 className="bg-[#242423] p-1 text-lg text-white font-semibold mb-5 rounded">
        {name}
      </h1>
    </Link>
  );
};

export default MemeCard;
