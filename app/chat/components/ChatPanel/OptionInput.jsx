import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import createNewQuestion from "./actions/conversation";

const OptionInput = ({ role }) => {
  const [chosenEngine, setChosenEngine] = useState(null);
  const inputRef = useRef(null);

  const researchOptions = [
    { name: "SWOT", value: "swot" },
    {
      name: "Supply Chain",
      value: "supply_chain",
    },
    {
      name: "Porters",
      value: "porters",
    },
    {
      name: "Developments",
      value: "developments",
    },
    {
      name: "Mucas",
      value: "mucas",
    },
  ];

  const strategistOptions = [
    { name: "SWOT", value: "swot" },
    { name: "4P", value: "goldenp" },
    { name: "Porters", value: "porters" },
    { name: "Sales", value: "salestp" },
    { name: "Orange", value: "orange" },
  ];

  const showArray = useMemo(
    () => (role === "Strategist" ? strategistOptions : researchOptions),
    [role]
  );
  console.log(chosenEngine, "chosen");
  const dispatch = useDispatch();

  async function askQuestion(e) {
    try {
      dispatch(
        createNewQuestion({
          query: inputRef.current.value,
          mind: role,
          engine: chosenEngine,
          api: role === "Strategist" ? "query_kb" : "query_kc",
        })
      );
    } catch (error) {
      console.log(error, "error");
    }
  }

  return (
    <div className={"w-full flex items-center bg-transparent"}>
      <div className="flex flex-col space-y-6 py-4 w-4/5 mx-auto ">
        <div className="flex space-x-3 w-full">
          <div
            className={"rounded-full text-white p-2 uppercase h-fit bg-black "}
          >
            {"RS"}
          </div>
          <div className="flex items-center space-x-2 max-w-full py-2">
            <p className=" text-wrap	 flex items-center ">Let Us work on</p>
            <input
              ref={inputRef}
              className="outline-none border-b px-1 border-white focus:border-blue-200 bg-transparent"
            />
            <p className=" text-wrap	 flex items-center ">Market</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-evenly">
          {showArray.map((option, key) => {
            return (
              <button
                onClick={() =>
                  chosenEngine === option?.value
                    ? setChosenEngine(null)
                    : setChosenEngine(option.value)
                }
                className={
                  "px-6 py-2 rounded-md text-white " +
                  (chosenEngine === option?.value
                    ? " bg-green-500"
                    : " bg-red-500")
                }
                key={key}
              >
                {option.name}
              </button>
            );
          })}
        </div>
        <button
          onClick={askQuestion}
          className="w-max px-40 py-2 rounded-full bg-[#1B68DC] mx-auto "
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default OptionInput;
