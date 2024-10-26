import React from "react";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className="bg-blue-300 w-full py-[100px]">
      <div className="max-w=[1240px] mx-auto text-center my-[100px]">
        <div className="text-xl md:text-4xl font-bold mx-auto mb-2">
          Learn with us
        </div>
        <h2 className="text-3xl md:text-7xl text-white font-bold md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-2xl md:text-5xl font-bold md:p-[24px]">
            Learn
            <ReactTyped
            className="pl-3"
            strings={["Web Developement", "UI/UX Design", "Cloud Computing", "Cyber Security"]}
                typeSpeed={120}
                loop={true}
                backSpeed={120}
                />

        </div>
        <button className="md:text-2xl bg-black text-white p-3 mt-4 rounded-lg">Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
