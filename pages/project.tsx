import Layout from "layout";

const project = () => {
  return (
    <Layout>
      <div className="h-auto w-full mt-28 width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto pt-8 pb-16">
          <div className="border-2 rounded-lg md:p-8 sm:p-4 p-2 m-2 border-gray-400">
            <a href="https://gecko-coin.vercel.app/" className="font-semibold md:text-3xl text-xl">
              Cryptocurrency coin
            </a>
            <p className="py-4 text-lg">
              A web that is a clone of{" "}
              <a href="https://www.coingecko.com/" className="underline">
                coingecko
              </a>{" "}
              that displays a list of available coins and prices in one hour, one day and seven days
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">React js</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">Typescript</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">TailwindCSS</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">React Query</p>
            </div>
          </div>
          <div className="border-2 rounded-lg md:p-8 sm:p-4 p-2 m-2 border-gray-400">
            <a href="https://tmdb-movie-three.vercel.app/" className="font-semibold md:text-3xl text-xl">
              Movie App
            </a>
            <p className="py-4 text-lg">
              A web that displays a list of trending movies and a description of the film that consume data provided by{" "}
              <a href="https://www.themoviedb.org/" className="underline">
                TMDB
              </a>
            </p>
            <p className="mb-4 text-sm">
              !!! The search feature is having problems because the api source is still using http, it is recommended to
              clone from the{" "}
              <a href="https://github.com/AndriP8/tmdb_movie" className="font-bold underline">
                source code
              </a>
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">React js</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">TailwindCSS</p>
            </div>
          </div>
          <div className="border-2 rounded-lg md:p-8 sm:p-4 p-2 m-2 border-gray-400">
            <a href="https://game-store-tau.vercel.app/" className="font-semibold md:text-3xl text-xl">
              Game store App
            </a>
            <p className="py-4 text-lg">
              A website that provides a way to top up coins for various games, this website is the final project of the
              fullstack javascript class at{" "}
              <a href="https://buildwithangga.com/" className="underline">
                Buildwithangga
              </a>
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">Typescript</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">Next JS</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">TailwindCSS</p>
            </div>
          </div>
          <div className="border-2 rounded-lg md:p-8 sm:p-4 p-2 m-2 border-gray-400">
            <a href="https://andrip8.github.io/FCC-RandomQuoteMachine/" className="font-semibold md:text-3xl text-xl">
              Quote random generator
            </a>
            <p className="py-4 text-lg">A website that provides quotes that can be shared on twitter</p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">React js</p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default project;
