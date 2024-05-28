import { cn } from "@/lib/utils";

const Languages = ({ languages, className }) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold">Languages</h2>
      <ul className="list-disc list-inside">
        {languages &&
          languages.map((language, index) => (
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
    </div>
  );
};

export default Languages;
