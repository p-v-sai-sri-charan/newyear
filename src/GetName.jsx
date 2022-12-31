//component to get the name from the user and store it in the local storage

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetName() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name.toLocaleUpperCase());
    navigate(`${window.location.host}/${localStorage.getItem("name")}`);
  };
  return (
    <div className="w-screen h-auto">
      <div className="flex flex-wrap justify-center content-center w-full h-full">
        <span className=" text-bold text-center">
          <span className="text-white">Generate your own here!!!</span>
          <form onSubmit={handleSubmit} className="flex flex-row  gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="rounded-lg px-4 py-2 bg-white-700 text-black-700 hover:bg-black-800 duration-300"
          />
          <button type="submit" className="rounded-lg px-4 py-0 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Submit</button>
        </form>
        </span>
      </div>
    </div>
  );
}

export default GetName;
