import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import GettingData from "./FetchData";

const MemeGenerate = () => {
  const [newImg, setNewImg] = useState(null);
  const { id } = useParams();

  const { Data: Meme, isLoading } = GettingData(`/${id}`);

  let SRC = Meme.blank;
  let inputsNum;
  if (!isLoading) {
    const URL = Meme.example.url;
    inputsNum = URL.split("/").length - 5;
  }

  let type = "";
  if (!isLoading) {
    for (let i = Meme.blank.length - 1; i >= 0; i--) {
      type += SRC[i];
      if (SRC[i] === ".") {
        break;
      }
    }
  }

  type = type.split("").reverse().join("");

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const values = [value1, value2, value3, value4, value5, value6];
  const settingValues = [
    setValue1,
    setValue2,
    setValue3,
    setValue4,
    setValue5,
    setValue6,
  ];

  let inputs = [];
  for (let i = 0; i < inputsNum; ++i) {
    inputs.push(
      <input
        className="p-3 m-3 w-full md:w-3/4 outline-0"
        key={i}
        type="text"
        value={values[i]}
        onChange={(e) => settingValues[i](e.target.value)}
        placeholder={`text ${i + 1}`}
      />
    );
  }

  const handleSubmit = () => {
    document.querySelector(".loading-screen").classList.remove("hidden");
    setTimeout(function() {
      document.querySelector(".loading-screen").classList.add("hidden");
      document.querySelector(".link").classList.remove("hidden");
    }, 1000);
    let BASE_SRC = `https://api.memegen.link/images/${Meme.id}`;
    for (let i = 0; i < inputsNum; ++i) {
      BASE_SRC += "/";
      if (inputs[i].props.value !== "") {
        BASE_SRC += inputs[i].props.value;
      } else {
        BASE_SRC += "_";
      }
    }

    BASE_SRC += type;
    SRC = BASE_SRC;
    setNewImg(SRC);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <section className="flex flex-col md:flex-row py-28  w-full justify-center items-center">
            <div className="w-[70%] md:w-1/3 relative overflow-hidden my-10">
              <div className="loading-screen absolute w-full h-full bg-black opacity-50 flex justify-center items-center hidden">
                <p className="text-3xl text-white"> Loading... </p>
              </div>
              <img className="w-full" src={newImg || SRC} alt={Meme.name} />
            </div>
            <div className="flex flex-col items-center w-[70%] md:w-1/3">
              {inputs}{" "}
              <button
                onClick={handleSubmit}
                className="w-3/4 p-3 m-3 bg-[#f5cb5c]"
              >
                Set
              </button>
              <a
                className="link w-3/4 p-3 m-3 bg-[#899878] cursor-pointer hidden"
                href={newImg}
                target="blank"
              >
                Download!
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default MemeGenerate;
