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
        className="text-black text-2xl py-3 px-3"
      />
    </div>
  );
};

const EmaiWriterInput = ({ mind, inputValues, setInputValues }) => {
  // Single state object for all inputs

  // Function to handle input changes
  const handleInputChange = (e, fieldName) => {
    setInputValues({ ...inputValues, [fieldName]: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row space-x-3 justify-center">
        <InputMain
          name="Theme"
          typevar="text"
          value={inputValues.theme}
          onChange={(e) => handleInputChange(e, "theme")}
        />
        <InputMain
          name="Target Audience:"
          typevar="text"
          value={inputValues.targetAudience}
          onChange={(e) => handleInputChange(e, "targetAudience")}
        />
        <InputMain
          name="Product"
          typevar="text"
          value={inputValues.product}
          onChange={(e) => handleInputChange(e, "product")}
        />
      </div>
      <div className="flex flex-row space-x-3 justify-center">
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
      </div>
      <div className="w-full flex justify-center">
        <DropdownMenu className="border-none ">
          <DropdownMenuTrigger className="border-none text-3xl font-medium">
            Project
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[10rem]">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer hover:text-purple-400">
              AFTC
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default EmaiWriterInput;
