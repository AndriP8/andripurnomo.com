import Layout from "layout";

const project = () => {
  return (
    <Layout>
      <div className="h-auto w-full mt-28 px-4 sm:px-8 md:px-52">
        <div className="grid grid-cols-2 auto-rows-auto">
          <div className="border-2 rounded-lg py-8 px-8 m-2 border-gray-400">
            <h2 className="font-semibold">Movie App</h2>
            <p className="pt-2 pb-4">
              A web that displays a list of trending movies and a description of
              the film that consume data provided by TMDB{" "}
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 border-2 rounded-xl border-black bg-gray-500">
                React js
              </p>
              <p className="p-2 mr-4 border-2 rounded-xl border-black bg-gray-500">
                TailwindCSS
              </p>
            </div>
          </div>
          <div className="border-2 rounded-lg py-8 px-8 m-2 border-gray-400">
            <h2 className="font-semibold">Cryptocurrency coin</h2>
            <p className="pt-2 pb-4">
              A web that is a clone of{" "}
              <a href="https://www.coingecko.com/" className="underline">
                coingecko
              </a>{" "}
              that displays a list of available coins and prices in one hour,
              one day and seven days
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">
                React js
              </p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">
                TailwindCSS
              </p>
              <p className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500">
                React Query
              </p>
            </div>
          </div>
          <div className="border-2 rounded-lg py-8 px-8 m-2 border-gray-400">
            <h2 className="font-semibold">Quote random generator</h2>
            <p className="pt-2 pb-4">
              A website that provides quotes that can be shared on twitter
            </p>
            <div className="flex items-center justify-start flex-wrap">
              <p className="p-2 mr-4 border-2 rounded-xl border-black bg-gray-500">
                React js
              </p>
              <p className="p-2 mr-4 border-2 rounded-xl border-black bg-gray-500">
                TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default project;
