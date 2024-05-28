import { cn } from "@/lib/utils";

export default function Achievements({ achievements, className }) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold mb-2">Achievements</h2>
      <ul className="list-disc list-inside mb-3">
        {achievements?.map((achievement, index) => (
          <li key={index} className="mb-2 list-none">
            <h3 className="text-xl font-semibold">{achievement.name}</h3>
            <p className="text-justify">{achievement.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Date:</strong> {achievement.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
