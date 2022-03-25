import ProjectItem from "./Project.item";

const Project = () => {
  return (
    <div className="h-auto w-full pt-28 width-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto pt-8 pb-16">
        <ProjectItem
          title="TMDB App"
          href="https://gecko-coin.vercel.app/"
          description="A TMDB-inspired website to help junior developers develop projects
              with scalable codebases."
          techStack={["React", "Typescript", "Storybook", "State Machine"]}
        />
        <ProjectItem
          title="Cryptocurrency coin"
          href="https://gecko-coin.vercel.app/"
          description="A web that is a clone of coingecko that displays a list of available coins and prices in one hour,
          one day and seven days"
          techStack={["React", "Typescript", "TailwindCSS", " React Query"]}
        />
        <ProjectItem
          title="Movie App"
          href="https://tmdb-movie-three.vercel.app/"
          description="A web that displays a list of trending movies and a description of
          the film that consume data provided by TMDB"
          techStack={["React", "TailwindCSS"]}
          note="!!! The search feature is having problems because the api source
            is still using http, it is recommended to clone from the"
        />
        <ProjectItem
          title="Game store App"
          href="https://game-store-tau.vercel.app/"
          description="A website that provides a way to top up coins for various games,
          this website is the final project of the fullstack javascript
          class at Buildwithangga"
          techStack={["Next JS", "Typescript", "Story book"]}
        />
      </div>
    </div>
  );
};

export default Project;
