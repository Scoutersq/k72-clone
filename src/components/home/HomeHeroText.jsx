import React from "react";
import Video from "./video";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-8 mt-96 lg:mt-0 text-center">
      <div className="lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] justify-center flex items-center">L'étincelle </div>
      <div className="lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] justify-center flex items-start pt-3">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full -mt-2 overflow-hidden">
          <Video/>
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[11.5vw] uppercase justify-center flex items-center lg:leading-[8vw] leading-[10vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
