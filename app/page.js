import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes');
  const response = await data.json();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-200 to-blue-800 text-white py-1">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Meme Maker</h1>
          <p className="mt-4 text-lg sm:text-xl">Crete Your Own Meme With Next Js</p>
        </div>
      </header>

      {/* Main Content */}
      
      <main className="flex align-middle text-wrap justify-center content-center">
        <div className="justify-center align-middle content-center m-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {response.data.memes.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
          
                <div className="relative w-full h-56 bg-gray-200">
                  <Image
                    src={item.url}
                    width={300}
                    height={300}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Meme Text and Button */}
                <div className="p-6">
                  <p className="text-xl font-semibold text-gray-700 truncate"> {item.name}</p>
                  <Link
                    href={{
                      pathname: 'creatememe',
                      query: {
                        url: item.url,
                        id: item.id,
                      },
                    }}
                  >
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                      Generate this meme
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm">Meme Maker &copy; 2024 | Powered by ImgFlip API</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
