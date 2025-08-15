import React, { useState } from 'react';
import './Input.css'; 

const EyeIcon = () => <>👁️</>;
const EyeOffIcon = () => <>🙈</>;
const ClearIcon = () => <>❌</>;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  value,
  onChange,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === 'password';

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    const syntheticEvent = {
        ...e,
        target: { ...e.target, value: '' },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    if (onChange) {
      onChange(syntheticEvent);
    }
  };


  const currentType = isPassword ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <div className="input-wrapper">
      <input
        type={currentType}
        className="input-field"
        value={value}
        onChange={onChange}
        {...props}
      />
      {clearable && value && (
        <button type="button" className="input-icon-btn clear-btn" onClick={handleClear}>
          <ClearIcon />
        </button>
      )}
      {isPassword && (
        <button type="button" className="input-icon-btn eye-btn" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      )}
    </div>
  );
};