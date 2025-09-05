import React from "react";

const Loading = () => {
  return (
    <div
      className="relative w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto animate-rotate"
      style={{ filter: "url(#goo)" }}
    >
      <div className="absolute w-[70px] h-[70px] rounded-full bg-[#ffc400] top-0 bottom-0 left-0 right-0 m-auto animate-dot-1"></div>
      <div className="absolute w-[70px] h-[70px] rounded-full bg-[#0051ff] top-0 bottom-0 left-0 right-0 m-auto animate-dot-2"></div>
      <div className="absolute w-[70px] h-[70px] rounded-full bg-[#ff1717] top-0 bottom-0 left-0 right-0 m-auto animate-dot-3"></div>

      {/* Gooey filter */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 21 -7"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
