import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Certifications({ certifications, className }) {
  return (
    <Card className={cn("mb-2", className)}>
      <CardHeader>
        <CardTitle>Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside mb-3">
          {certifications?.map((cert, index) => (
            <li key={index} className="mb-2 list-none">
              <h3 className="text-xl font-semibold">{cert.name}</h3>{" "}
              <p className="text-justify">{cert.description}</p>
              <div className="text-sm text-gray-500 flex justify-between">
                <p>
                  <strong>Authority:</strong> {cert.authority}
                </p>
                <p>
                  <strong>Date:</strong> {cert.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
