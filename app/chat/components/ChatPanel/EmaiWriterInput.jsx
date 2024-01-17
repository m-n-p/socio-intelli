import React, { useState } from "react";

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

const EmaiWriterInput = ({ mind }) => {
  // Single state object for all inputs
  const [inputValues, setInputValues] = useState({
    theme: "",
    targetAudience: "",
    product: "",
    specialOffer: "",
    emailSeqNumber: "",
  });
  console.log(inputValues, "input");
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
            name="Special Offer"
            typevar="text"
            value={inputValues.specialOffer}
            onChange={(e) => handleInputChange(e, "specialOffer")}
          />
        )}

        <InputMain
          name="Email Sequence Number"
          typevar="number"
          value={inputValues.emailSeqNumber}
          onChange={(e) => handleInputChange(e, "emailSeqNumber")}
        />
      </div>
    </div>
  );
};

export default EmaiWriterInput;
