import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Achievements({ achievements, className }) {
  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
