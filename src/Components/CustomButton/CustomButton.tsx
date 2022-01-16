import React from "react";

import "./CustomButton.scss";

interface CustomButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  additionalClass?: string;
  children?: React.ReactNode;
  handleClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  additionalClass,
  children,
  handleClick,
  type,
  form,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      form={form}
      type={type}
      onClick={handleClick}
      className={`custom__button ${additionalClass}`}
    >
      <div className="button__content">{children}</div>
    </button>
  );
};
