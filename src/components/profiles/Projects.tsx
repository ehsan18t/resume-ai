import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Projects({ projects, className }) {
  const last = projects.length - 1;

  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {projects?.map((project, index) => (
            <div
              key={index}
              className={`${
                index !== last && "border-b-2 border-dashed mb-2 py-2"
              } "mb-2 py-2"`}
            >
              <p className="text-justify">
                <strong>{project.name}:</strong> {project.description}
              </p>
              <ul className="list-none py-2 flex gap-2">
                {project.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-200 py-1 px-2 rounded-full text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
