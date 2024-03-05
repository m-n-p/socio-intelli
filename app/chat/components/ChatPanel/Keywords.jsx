import React from "react";

const Keywords = ({
  handleDeleteKeyword,
  currentKeyword,
  handleKeywordChange,
  handleKeyPress,
  addKeyword,
  inputValues,
}) => {
  return (
    <div class="flex flex-col items-center h-min py-6">
      <div class="w-full py-4 px-4  items-center bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-xl dark:bg-gray-500">
        <h1 class="mr-2 text-2xl text-gray-800 font-bold w-full dark:text-gray-100">
          Keywords👋
        </h1>

        <form action="#" class="mt-8">
          <div class="flex flex-col items-center  text-sm sm:flex-row sm:space-y-0 sm:space-x-4">
            <div class="w-full ">
              <label for="input1">
                <input
                  id="input1"
                  type="text"
                  value={currentKeyword}
                  onChange={handleKeywordChange}
                  onKeyDown={handleKeyPress}
                  class="mt-1 py-3 px-5 w-full border-2 border-purple-300 rounded-2xl outline-none placeholder:text-gray-400 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer dark:bg-gray-500 dark:text-gray-200 dark:placeholder:text-gray-300 dark:invalid:text-pink-300 dark:border-gray-400"
                  placeholder="Type something"
                />
                <p class="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">
                  less than 5 characters
                </p>
              </label>
            </div>
            <div
              onClick={addKeyword}
              class="w-full text-center py-3 px-8 text-sm font-medium bg-purple-500 text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-purple-700 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 mb-4 sm:mb-0"
            >
              <span>Add</span>
            </div>
          </div>
        </form>
        {inputValues?.keywords.length > 0 ? (
          <div class="px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-purple-200 dark:bg-gray-400">
            {inputValues?.keywords?.map((keyword, index) => {
              return (
                <span
                  key={index}
                  class="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                >
                  {keyword}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-3 hover:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => handleDeleteKeyword(index)}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              );
            })}
          </div>
        ) : (
          <div class="px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-purple-200 dark:bg-gray-400">
            Enter the Keywords
          </div>
        )}
      </div>
    </div>
  );
};

export default Keywords;
