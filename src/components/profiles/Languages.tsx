import { Icon } from "@/components/common";
import { cn } from "@/lib/utils";

const Languages = ({ languages, className, editable = false }) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold flex justify-between items-center">
        Languages {editable && <Icon type="add" />}
      </h2>
      <ul className="list-disc list-inside">
        {languages &&
          languages.map((language, index) => (
            <li
              key={index}
              className="text-lg text-gray-700 flex justify-between items-center"
            >
              {language.language}{" "}
              {editable && (
                <span className="flex gap-1">
                  <Icon type="edit" />
                  <Icon type="delete" />
                </span>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Languages;
