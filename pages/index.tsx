import Footer from "Footer";
import Navbar from "Navbar";
import TechStack from "TechStack";

const Home = () => {
  return (
    <div className="h-full w-full bg-gray-50 mb-16 sm:mb-0">
      <Navbar />
      <div className="w-full width-container py-52">
        <h1 className="text-4xl">Hi, Im Andri Purnomo</h1>
        <div className="mt-2 max-w-2xl w-full text-lg">
          <p>
            Someone who is very interested in frontend development since late
            2020,
          </p>
          <p>
            I&rsquo;m currently focused on using Reactjs, TypeScript and
            Tailwindcss which are really cool user interface frameworks and
            customizable class utilities
          </p>
        </div>
        <div>
          <TechStack />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
