import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import GettingData from "./FetchData";

const MemePage = () => {

  const { id } = useParams();

  const { Data: Meme, isLoading } = GettingData(`/${id}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-full flex flex-col items-center justify-center p-20">
          <h1 className="text-5xl text-white p-8 font-semibold">{Meme.name}</h1>
          <img className="md:w-1/3" src={Meme.example.url} alt={Meme.name} />
          <div>
            <a href={Meme.blank} download>
              <button className="py-3 border border-white text-white m-8 w-[200px]">
                Download Template
              </button>
            </a>
            <Link to={`/generate/${Meme.id}`}>
            <button className="py-3 bg-[#f5cb5c] border border-[#f5cb5c] m-8 w-[200px]">
              Create your Meme!
            </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MemePage;
