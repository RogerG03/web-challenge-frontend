import React, { ChangeEvent } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface InputFormProps {
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "textarea"
    | "select"
    | string;
  label?: string;
  placeholder?: string;
  id: string;
  readOnly?: boolean;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
  options?: Option[];
  rows?: number;
}

const InputForm: React.FC<InputFormProps> = ({
  type = "text",
  label,
  placeholder = "",
  id,
  readOnly = false,
  className = "",
  value = "",
  onChange = () => {},
  required = false,
  options = [],
  rows = 4,
}) => {
  const combinedClass =
    `${className} text-black w-[300px] h-[50px] p-2 border rounded-xl border-[var(--color-green)]`.trim();

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            name={id}
            className={combinedClass}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
          />
        );

      case "select":
        return (
          <select
            id={id}
            name={id}
            className={combinedClass}
            value={value}
            onChange={onChange}
            disabled={readOnly}
            required={required}
          >
            <option value="">Seleccione una opción</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            id={id}
            name={id}
            type={type}
            className={combinedClass}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            onChange={onChange}
            required={required}
          />
        );
    }
  };

  return (
    <article className="flex flex-col gap-4 mb-4 text-black">
      {label && (
        <label className="font-bold text-xl" htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {renderInput()}
    </article>
  );
};

export default InputForm;
