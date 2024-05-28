import { cn } from "@/lib/utils";

const Education = ({ educations, className }) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold pb-2">Education</h2>
      {educations &&
        educations.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <div className="flex gap-3 justify-between items-center text-start">
              <p>{edu.degree}</p>
              <p className="text-sm">
                ({edu.start_date} -{" "}
                {edu.end_date == null || !edu.end_date
                  ? edu.end_date
                  : "Present"}
                )
              </p>
            </div>
            <p>
              <strong>CGPA:</strong> {edu.cgpa}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Education;
