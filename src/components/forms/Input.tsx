import { ChangeEvent } from "react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  className?: string;
}

export default function Input({
  labelId,
  type,
  onChange,
  value,
  children,
  link,
  required = false,
  className,
}: Props) {
  return (
    <div className={className}>
      <label htmlFor={labelId} className="text-sm font-medium text-gray-900">
        {children}
      </label>
      <div className="mt-2">
        <input
          id={labelId}
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
}
