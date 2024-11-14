import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  const sharedClasses = `px-3 py-1 border border-gray-500 text-white transition duration-300 rounded-xl ${className}`;
  return (
    <button onClick={onClick} className={sharedClasses}>
      {children}
    </button>
  );
};

export default Button;
