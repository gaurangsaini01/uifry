import React from "react";

function Download() {
  return (
    <div className="md:max-w-[80%] flex items-center relative justify-center max-w-[100vw] mx-auto md:mt-28 mt-8 ">
      <img src="star3.png" className="absolute left-[-100px] top-36"/>
      <img src="/download.svg" className="relative z-20" width={1200} alt="" />
      <img src="bg.png" className="absolute sm:visible invisible left-[-200px] top-[-180px] z-10" alt="" />
    </div>
  );
}

export default Download;
