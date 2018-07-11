import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <span className="button-container">
    <button {...props}>Say: {children}</button>
  </span>
);
