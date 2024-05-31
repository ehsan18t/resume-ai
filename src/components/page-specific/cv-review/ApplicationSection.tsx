import { cn } from "@/lib/utils";

import {
  Achievements,
  Certifications,
  Education,
  Experiences,
  Projects,
  Skills,
} from "@/components/profiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ApplicationSection({ data, className }) {
  let element = null;

  if (data.key === "experiences") {
    element = <Experiences className="h-full" experiences={data.section} />;
  } else if (data.key === "educations") {
    element = <Education className="h-full" educations={data.section} />;
  } else if (data.key === "skills") {
    element = <Skills className="h-full" skills={data.section} />;
  } else if (data.key === "projects") {
    element = <Projects className="h-full" projects={data.section} />;
  } else if (data.key === "languages") {
    element = (
      <Card className="mb-8 h-full">
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {data?.section &&
              data?.section.map((language, index) => (
                <li key={index} className="text-lg text-gray-700 ">
                  {language.language}{" "}
                  {language.proficiency && (
                    <span className="text-sm text-zinc-500">
                      ({language.proficiency})
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </CardContent>
      </Card>
    );
  } else if (data.key === "certifications") {
    element = (
      <Certifications className="h-full" certifications={data.section} />
    );
  } else if (data.key === "achievements") {
    element = <Achievements className="h-full" achievements={data.section} />;
  } else {
    element = (
      <Card className="h-full flex justify-center items-center">
        <p className="text-lg">Select a tab</p>
      </Card>
    );
  }

  return (
    <ScrollArea autoFocus type="none" className={cn("text-left ", className)}>
      <div className="grid grid-cols-3 gap-3 h-[455px]">
        <div className="col-span-2">{element}</div>
        <Card className="col-auto">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify text-sm">{data?.summary}</p>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
