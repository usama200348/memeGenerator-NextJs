"use client";

import React, { useRef, useState } from "react";

const Creatememe = ({ searchParams }) => {
  const [img, setImg] = useState("");
  const text1 = useRef();
  const text2 = useRef();

  // API for meme creation
  const createMeme = async (event) => {
    event.preventDefault();
    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method: "POST",
      }
    );
    const response = await data.json();
    setImg(response.data.url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Create Your Meme
        </h1>
        <div className="text-center mb-6">
          <img
            className="w-[300px] h-auto mx-auto rounded-lg"
            src={searchParams.url}
            alt="meme-preview"
          />
        </div>

        <form onSubmit={createMeme} className="space-y-4">
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter text 1"
              ref={text1}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="text"
              placeholder="Enter text 2"
              ref={text2}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-4 text-[#000]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Meme
            </button>
          </div>
        </form>

        {img && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Meme</h2>
            <img
              className="w-[300px] h-auto mx-auto rounded-lg"
              src={img}
              alt="final-meme"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Creatememe;
