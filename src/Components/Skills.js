import React from "react";

function Skills() {
  return (
    <div className="bg-blue-300 py-10 ">
      <div className="max-w-[1240px] md:flex mx-auto justify-around py-20">
        <div className="m-2">
          <h1 className="text-[20px] font-bold md:text-[40px]">
            Want to Learn I.T Skills ?
          </h1>
          <span className="font-bold text-xl">
            Signup our newsletter and stay up to date...
          </span>
        </div>
        <div className="m-2 ">
          <input
            type="text"
            className="p-3 mr-2 text-center rounded-md font-bold"
            placeholder="Enter your mail.."
          />
          <button className="md:text-lg text-sm bg-black text-white p-4 mt-4 rounded-lg">
            Click Here !
          </button>
          <br />
          <h3 className="font-bold text-lg mt-5">
            We care about your details..Raed our
            <br />
            <a href="" className="underline underline-offset-4">
              Privacy and Policy
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
