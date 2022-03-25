interface ProjectItemProps {
  href: string;
  title: string;
  description: string;
  techStack: string[];
  note?: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="border-2 rounded-lg md:p-8 sm:p-4 p-2 m-2 border-gray-400">
      <a href={props.href} className="font-semibold md:text-3xl text-xl">
        {props.title}
      </a>
      <p className="py-4 text-lg">{props.description}</p>
      <div className="flex items-center justify-start flex-wrap">
        {props.techStack.map((stack) => (
          <p
            key={stack}
            className="p-2 mr-4 my-1 border-2 rounded-xl border-black bg-gray-500"
          >
            {stack}
          </p>
        ))}
        {props.note && <p className="mb-4 text-sm">{props.note}</p>}
      </div>
    </div>
  );
};

export default ProjectItem;
