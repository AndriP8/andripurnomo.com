import { SITE_CONFIG } from "@lib/constants";
import { JsonLd } from "@ui/components";
import { Metadata } from "next";

export const metadata = {
  title: "About Me",
  // TODO: Update description
  description:
    "Learn about Andri Purnomo, a Frontend Engineer specializing in React, TypeScript, and Next.js. Discover my journey from Binar Academy to Zero One Group.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Me | ${SITE_CONFIG.name}`,
    description:
      "Frontend Engineer specializing in React, TypeScript, and Next.js. Building performant web applications.",
    url: `${SITE_CONFIG.url}/about`,
  },
  twitter: {
    title: `About Me | ${SITE_CONFIG.name}`,
    description:
      "Frontend Engineer specializing in React, TypeScript, and Next.js. Building performant web applications.",
  },
} satisfies Metadata;

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    jobTitle: SITE_CONFIG.author.jobTitle,
    // TODO: Update description
    description: "Frontend Engineer specializing in React, TypeScript, and Next.js.",
    url: SITE_CONFIG.url,
    sameAs: [SITE_CONFIG.author.twitter, SITE_CONFIG.author.github],
    worksFor: {
      "@type": "Organization",
      name: "Zero One Group",
      url: "https://zero-one-group.com/",
    },
  },
};

export default async function Page() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <div className="space-content my-28">
        <div className="prose max-w-none">
          <h1 className="text-4xl">Hi, I&lsquo;m Andri Purnomo as a Frontend Engineer</h1>
          <div className="text-lg">
            <p className="my-1.5">
              My journey into the world of programming in high school when I discovered the joy of
              coding through a learning method that seemed fun and easily understandable.
            </p>
            <p className="my-1.5">
              Eager to deepen my knowledge, I embarked on a journey by enrolling in a Web
              Development Bootcamp at{" "}
              <a href="https://www.binaracademy.com/" target="_blank" rel="noreferrer noopener">
                Binar Academy
              </a>
              . There, I immersed myself in the world of full-stack technologies, gaining a
              comprehensive understanding of web programming.
            </p>
            <p className="my-1.5">
              Fast forward a few months, I became a full-time employee as a Frontend Engineer at{" "}
              <a href="https://zero-one-group.com/" target="_blank" rel="noreferrer noopener">
                Zero One Group
              </a>
              . Over the past two years, I&lsquo;ve had the privilege of contributing to innovative
              projects and honing my skills in crafting seamless and user-friendly web experiences.
            </p>
            <p className="my-1.5">
              I thrive on the dynamic challenges of the frontend landscape, blending creativity with
              technical expertise to bring designs to life. Whether it&lsquo;s optimizing user
              interfaces or staying abreast of the latest industry trends, I&lsquo;m committed to
              delivering excellence in every line of code.
            </p>
            <p className="my-1.5">
              Outside work, I&lsquo;m passionate about exploring new technologies and understanding
              their under the hood. Sometimes I document my insights in a blog, where I break down
              complex concepts to validate my understanding and contribute to the tech
              community&lsquo;s knowledge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
