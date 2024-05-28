import { cn } from "@/lib/utils";

const Skills = ({ skills, className }) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-2xl font-bold pb-1">Skills</h2>
      <ul className="flex flex-wrap justify-between flex-row text-justify pl-1">
        {skills.map((skill, index) => (
          <li className="text-lg text-gray-700 list-disc mx-3" key={index}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
