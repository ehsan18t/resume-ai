import { cn } from "@/lib/utils";

const Experiences = ({ experiences, className }) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold pb-2">Experiences</h2>
      {experiences &&
        experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p>{exp.description}</p>
            <p className="text-sm">
              ({exp.start_date} -{" "}
              {exp.end_date == null || !exp.end_date ? exp.end_date : "Present"}
              )
            </p>
          </div>
        ))}
    </div>
  );
};

export default Experiences;
