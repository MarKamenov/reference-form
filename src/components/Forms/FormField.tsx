
export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: string
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  value: string;
  required?: boolean
}

export const FormField = ({ id, label, name, type, handleChange, value, required }: FormFieldProps) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        data-testid="input"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e)}
        required={required}
      />
    </>
  );
};
