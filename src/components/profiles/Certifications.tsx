import { cn } from "@/lib/utils";

export default function Certifications({ certifications, className }) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold mb-2">Certifications</h2>
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
    </div>
  );
}
