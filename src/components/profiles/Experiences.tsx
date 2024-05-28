import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Experiences = ({ experiences, className }) => {
  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Experiences</CardTitle>
      </CardHeader>
      <CardContent>
        {experiences &&
          experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p>{exp.description}</p>
              <p className="text-sm">
                ({exp.start_date} -{" "}
                {exp.end_date == null || !exp.end_date
                  ? exp.end_date
                  : "Present"}
                )
              </p>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default Experiences;
