import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Skills = ({ skills, className }) => {
  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap justify-between flex-row text-justify pl-1">
          {skills.map((skill, index) => (
            <li className="text-lg text-gray-700 list-disc mx-3" key={index}>
              {skill.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Skills;
