"use client";
import gsap from "gsap";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";

const Button = () => {
  const [isClickedPrimary, setIsClickedPrimary] = useState(false);

  gsap.registerPlugin(useGSAP);

  return (
    <div className="w-96 mx-auto my-10">
      <div>
        <button
          id="primary"
          disabled={isClickedPrimary}
          onClick={() => setIsClickedPrimary(!isClickedPrimary)}
          className={`text-white w-20 py-2 rounded-lg transition-all hover:bg-blue-600 flex justify-center items-center ${
            isClickedPrimary ? "bg-blue-600 cursor-not-allowed" : "bg-blue-700 cursor-pointer"
          }`}
        >
          {isClickedPrimary ? (
            <div className="w-5 h-5 border-4 border-t-white border-blue-500 rounded-full animate-spin">
            </div>
          ) : (
            <div>Submit</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Button;
