import Navbar from "Navbar";
import Footer from "Footer";

const About = () => {
  return (
    <div className="h-full w-full bg-gray-50 mb-16 sm:mb-0">
      <Navbar />
      <div className="pt-28 width-container w-full">
        <div className="py-8">
          <h1 className="text-3xl">About</h1>
          <h2> Hello! I&rsquo;m Andri as a Front-end developer</h2>
          <div className="my-2 py-4">
            <p className="my-2">
              I studied programming since high school majoring in software
              engineering, at that time I was very interested in web programming
              because the learning method applied by the teacher was easy to
              understand and not boring.
            </p>
            <p className="my-2">
              A year later I was interested in learning more about web
              development because I found a passion in writing code, especially
              to create website displays, finally a few months later I decided
              to join a bootcamp for web development and I chose{" "}
              <a href="https://binaracademy.com" className="underline">
                Binar Academy{" "}
              </a>{" "}
              where I could learn more about web development.
            </p>
            <p className="my-2">
              There I learned about front-end development and back-end
              development from scratch, starting from HTML, basic git,
              Javascript, Node.js, React, user interface frameworks like
              React-Bootstrap, to popular javascript frameworks like Next.js and
              Express.
            </p>
            <p className="my-2">
              After six months of bootcamp process, I passed without fail in
              every chapter but I felt not confident with my abilities, finally
              I got a good environment to develop my skills and started taking
              several online classes such as{" "}
              <a href="https://frontendmasters.com/" className="underline">
                Frontend masters,
              </a>{" "}
              <a href="https://justjavascript.com/" className="underline">
                JustJavascript{" "}
              </a>{" "}
              and reading articles about Frontend development.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
