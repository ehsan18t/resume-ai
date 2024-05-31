import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Education = ({ educations, className }) => {
  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        {educations &&
          educations.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <div className="flex gap-3 justify-between items-center text-start">
                <p>{edu.degree}</p>
                {edu.start_date && (
                  <p className="text-sm">
                    ({edu.start_date} -{" "}
                    {edu.end_date != null ? edu.end_date : "Present"})
                  </p>
                )}
              </div>
              <p>
                <strong>CGPA:</strong> {edu.cgpa}
              </p>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default Education;
