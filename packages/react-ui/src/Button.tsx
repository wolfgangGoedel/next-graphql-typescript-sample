import React from "react";

export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <span className="button-container">
    <button {...props}>Hello {children} !</button>
  </span>
);
