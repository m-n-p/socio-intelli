import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InputMain = ({ name, typevar, value, onChange }) => {
  return (
    <div className="py-6 flex flex-col space-y-4">
      <div className="text-2xl font-medium">{name}</div>
      <input
        type={typevar}
        value={value}
        onChange={onChange}
        className="text-black text-xl font-medium border border-purple-500 py-3 px-3 rounded-2xl "
      />
    </div>
  );
};
const InputMain2 = ({ name, typevar, value, onChange }) => {
  return (
    <div className="py-6 flex flex-col space-y-4">
      <div className="text-2xl font-medium">{name}</div>
      <textarea
        rows={6}
        type={typevar}
        value={value}
        onChange={onChange}
        className="text-black text-xl font-medium border border-purple-500 py-3 px-3 rounded-2xl "
      />
    </div>
  );
};

const EmaiWriterInput = ({ activeThread, inputValues, setInputValues }) => {
  // Single state object for all inputs

  // Function to handle input changes
  const handleInputChange = (e, fieldName) => {
    if (fieldName === "project" || fieldName === "product") {
      setInputValues({ ...inputValues, [fieldName]: e });
    } else {
      setInputValues({ ...inputValues, [fieldName]: e.target.value });
    }
  };
  console.log(inputValues, "input");
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col  justify-center w-2/3 mx-auto">
        <InputMain
          name="Objective"
          typevar="text"
          value={
            activeThread?.chats?.length > 0
              ? activeThread?.chats[0]?.objective
              : inputValues.theme
          }
          onChange={(e) => handleInputChange(e, "theme")}
        />
        <InputMain
          name="Target Audience:"
          typevar="text"
          value={
            activeThread?.chats?.length > 0
              ? activeThread?.chats[0]?.target_audience
              : inputValues.targetAudience
          }
          onChange={(e) => handleInputChange(e, "targetAudience")}
        />
        <InputMain
          name="Industry:"
          typevar="text"
          value={inputValues?.industry}
          onChange={(e) => handleInputChange(e, "industry")}
        />
        <InputMain2
          name="Earlier Email:"
          typevar="text"
          value={inputValues?.earlier_email}
          onChange={(e) => handleInputChange(e, "earlier_email")}
        />
        {/* <InputMain
          name="Product"
          typevar="text"
          value={inputValues.product}
          onChange={(e) => handleInputChange(e, "product")}
        /> */}
      </div>
      {/* <div className="flex flex-row space-x-3 justify-center">
        {mind === "Email-Writer" && (
          <InputMain
            name="Email Sequence Number"
            typevar="number"
            value={inputValues.emailSeqNumber}
            onChange={(e) => handleInputChange(e, "emailSeqNumber")}
          />
        )}
        {mind !== "Blog-Article-Writer" && (
          <InputMain
            name="Special Offer"
            typevar="text"
            value={inputValues.specialOffer}
            onChange={(e) => handleInputChange(e, "specialOffer")}
          />
        )}
      </div> */}
      <div className="w-[30%] mx-auto flex justify-center flex-col space-y-6 ">
        <DropdownMenu className="border-none ">
          <DropdownMenuTrigger className="border-black border-2 px-4 py-3 rounded-full text-xl font-medium  hover:bg-purple-400 hover:text-white hover:border-white">
            {inputValues?.project === ""
              ? " Click Here To Select Project"
              : inputValues?.project}
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[10rem]">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("agmv", "project")}
            >
              AGMV
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("unwinded", "project")}
            >
              MU
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("mnp", "project")}
            >
              MNP
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {inputValues?.project !== "" && (
          <DropdownMenu className="border-none ">
            <DropdownMenuTrigger className="border-black border-2 px-4 py-3 rounded-full text-xl font-medium  hover:bg-purple-400 hover:text-white hover:border-white">
              {inputValues?.product === ""
                ? " Click Here To Select Product"
                : inputValues?.product}
            </DropdownMenuTrigger>
            {inputValues?.project === "agmv" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("etx", "product")}
                >
                  etx
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("aftc", "product")}
                >
                  aftc
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
            {inputValues?.project === "mnp" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("software", "product")}
                >
                  Software
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("marketing", "product")}
                >
                  Marketing
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("ai", "product")}
                >
                  AI
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("strategy", "product")}
                >
                  Strategy
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
            {inputValues?.project === "mu" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("universe", "product")}
                >
                  Universe
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default EmaiWriterInput;
