import { useState } from "react";
import { SearchIcon } from "../icons/Icons";
import { Link } from "react-router-dom";
import GettingData from "./FetchData";

const SearchingFun = () => {
  const { Data: Memes } = GettingData("");

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = Memes.filter(
    (item) =>
      searchQuery !== "" &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
    setSearchQuery("");
  };

  return (
    <div>
      <div
        className={`${
          !active ? "hidden" : ""
        } w-full flex justify-center items-center relative`}
      >
        <div
          onClick={toggleActive}
          className="fixed top-0 left-0 w-full h-full bg-black z-40 opacity-60"
        ></div>
        <div className="fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 max-w-screen-lg w-full px-10 duration-200 ease-in-out">
          <div className="w-full flex justify-between bg-white border-b rounded-t-lg overflow-hidden">
            <div className="flex w-[100%]">
              <SearchIcon color="#000000" className="ml-2 w-5" />
              <input
                type="text"
                placeholder="search memes..."
                className="p-2 outline-0 text-black w-[90%]"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <button
              onClick={toggleActive}
              className="p-2 bg-gray-200 text-black"
            >
              Esc
            </button>
          </div>
          <div className="min-h-[25px] bg-white text-black">
            <ul>
              {filteredItems.slice(0, 5).map((item, index) => (
                <Link to={`/templates/${item.id}`}>
                  <li
                    onClick={toggleActive}
                    className="flex justify-start p-4 cursor-pointer hover:bg-gray-100"
                    key={index}
                  >
                    <div className="w-8 h-8 overflow-hidden flex justify-center">
                      <img
                        src={item.blank}
                        alt={item.id}
                        className="h-full rounded"
                      />
                    </div>
                    <p className="ml-2">{item.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center relative">
        <SearchIcon
          onClick={toggleActive}
          color="#fff"
          className="cursor-pointer w-5 absolute right-10 md:right-0"
        />
      </div>
    </div>
  );
};

export default SearchingFun;
