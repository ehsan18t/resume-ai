"use client";

import { Icon } from "@/components/common";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CiEdit } from "react-icons/ci";
import { MdAdd, MdDeleteOutline } from "react-icons/md";

const Experiences = ({
  experiences,
  setExperiences,
  className,
  editable = false,
}) => {
  const handleChanges = (index, key, value) => {
    const updatedExperiences = [...experiences];

    // remove
    if (!key || !value) {
      updatedExperiences.splice(index, 1);
    } else {
      updatedExperiences[index][key] = value;
    }
    setExperiences(updatedExperiences);
  };

  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          Experiences
          {editable && <Icon onClick={onAdd} icon={MdAdd} />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {experiences &&
          experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold flex justify-between">
                {exp.title}
                {editable && (
                  <span className="flex gap-1">
                    <Icon onClick={() => handleChanges(index)} icon={CiEdit} />
                    <Icon
                      onClick={() => handleChanges(index)}
                      icon={MdDeleteOutline}
                      className="text-red-500"
                    />
                  </span>
                )}
              </h3>
              <p>{exp.description}</p>
              <p className="text-sm">
                ({exp.start_date} -{" "}
                {exp.end_date != null ? exp.end_date : "Present"})
              </p>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default Experiences;
