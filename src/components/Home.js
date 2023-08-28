import { useState } from "react";
import MemeCard from "./MemeCard";
import Loading from "./Loading";
import GettingData from "./FetchData";

const Home = () => {
 const { Data: Memes, isLoading } = GettingData("");

  const left = 0,
    right = 24;
  const [x, setX] = useState(0);
  const [y, setY] = useState(24);

  const handleVisit = (e) => {
    console.log(e.target.id);
    setX(left + e.target.id * 24);
    setY(right + e.target.id * 24);
    document.querySelectorAll(".btn").forEach((btn)=>{
      btn.classList.remove("bg-[#242423]");
    })
    e.target.classList.add("bg-[#242423]");
    window.scrollTo(0, 0);
  };
  let buttonsNum = Memes.length / 24;
  let buttons = [];

  for (let i = 0; i < buttonsNum; ++i) {
    buttons.push(
      <button
        id={i}
        onClick={handleVisit}
        className={`${i === 0 ? "bg-[#242423]" : ""} border px-3 py-1 m-2 text-white btn font-semibold`}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-5 pt-20 text-start ">
          <h1 className="text-white text-4xl my-5 font-bold">Featured</h1>
          <div className="flex flex-wrap justify-center w-full">
            {Memes.slice(x, y)?.map((meme) => (
              <MemeCard img={meme.blank} id={meme.id} name={meme.name} />
            ))}
          </div>
          <div className="p-5">{buttons}</div>
        </div>
      )}
    </>
  );
};

export default Home;
