import Layout from 'layout';
import Link from 'next/link';

const About = () => {
  return (
    <Layout>
      <div className="mt-28 width-container w-full">
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
              to join a bootcamp for web development and I chose{' '}
              <Link href="https://binaracademy.com">Binar Academy</Link>
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
              several online classes such as{' '}
              <Link href="https://frontendmasters.com/">Frontend masters</Link>
              <Link href="https://justjavascript.com/">JustJavascript</Link>
              and reading articles about Frontend development.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
