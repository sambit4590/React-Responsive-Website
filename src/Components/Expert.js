import React from "react";
import boy from "../assets/boy.jpg";

function Expert() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2 h-5/6">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={boy} className="inline" />
      </div>
      <div className="col-span-1 flex flex-col mt-5">
        <h4 className="font-bold text-2xl mx-2  pt-4 md:pt-3 ">LEARN FROM EXPERTS</h4>
        <p className="font-mono my-4 mx-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button className="w-[30%] md:text-xl text-md mx-2 bg-black text-white p-2 mt-4 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Expert;
