import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });
  });
  return (
      
    <div className="eyes w-full h-screen overflow-hidden">
      
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-ful h-full bg-cover bg-center bg-[url('data:image/jpeg;base64,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')]"
      >
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
                
              </div>
            </div>
          </div>

          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative  w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;