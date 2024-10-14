"use client";

const Button = ({
  loading,
  icon,
  type,
  onClick,
  className,
  disabled,
  children,
  style,
  variant,
  ...props
}) => {
  return (
    <button
      className={`bg-primary hover:text-accent-yellow rounded-tl-30 rounded-br-30 rounded-tr-60 rounded-bl-60 text-base text-white ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};

export default Button;
