interface TextInputProps {
  label: string;
  fieldName: string;
  fieldType?: string;
  fieldValue: string;
  changeInput: React.FormEventHandler<HTMLInputElement>;
}

const TextInput = ( {
  fieldName,
  fieldType,
  label,
  fieldValue,
  changeInput,
}: TextInputProps ) => {
  return (
    <div className="mb-3">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type={fieldType ?? 'text'}
        className="form-control"
        id={fieldName}
        name={fieldName}
        value={fieldValue}
        onInput={changeInput}
      />
    </div>
  );
};

export default TextInput;
