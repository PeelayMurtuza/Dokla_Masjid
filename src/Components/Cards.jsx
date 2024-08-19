import React from "react";

function Cards() {
    return (
      <div className="w-full h-screen flex gap-5 items-center px-32  bg-zinc-900">
        <div className="cardContainder h-[50vh] w-1/2">
          <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img
              className="w-32 "
              src=""
              alt="img"
            ></img>
            <button className="absolute  px-5 py-1 rounded-full border-2 left-10 bottom-10">
              
            </button>
          </div>
        </div>
        <div className="cardContainder flex gap-5 h-[50vh] w-1/2">
          <div className="card w-1/2 h-full rounded-xl relative flex items-center justify-center bg-[#102623] ">
            <img
              src=""
              alt="img "
            ></img>
            <button className="absolute  px-5 py-1 rounded-full border-2 left-10 bottom-10">
              
            </button>
          </div>
          <div className="card w-1/2 rounded-xl h-full relative flex items-center justify-center bg-[#102623]">
            <img
              src=""
              alt="img "
            ></img>
            <button className="absolute  px-5 py-1 rounded-full border-2 left-10 bottom-10">
             
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;