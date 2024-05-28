import { cn } from "@/lib/utils";

export default function Projects({ projects, className }) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <ul className="list-disc list-inside mb-3">
        {projects?.map((project, index) => (
          <li
            key={index}
            className="mb-2 list-none border-b-2 border-dashed pb-2"
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
          </li>
        ))}
      </ul>
    </div>
  );
}
