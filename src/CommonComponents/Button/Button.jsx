import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
/**
 * Reusable Button Component for WhyNotFly
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text or elements
 * @param {string} props.variant - 'primary', 'outline', 'ghost'
 * @param {React.ReactNode} props.icon - Optional icon component/svg
 * @param {string} props.className - Additional custom classes
 * @param {string} props.href - If provided, renders as an anchor tag
 * @param {string} props.type - Button type (submit, reset, button)
 * @param {boolean} props.disabled - Disabled state
 * @param {function} props.onClick - Click handler
 */
const Button = ({
  children,
  variant = "primary",
  icon,
  className = "",
  href,
  to,
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClass = "wnf-btn";
  const variantClass = `wnf-btn--${variant}`;
  const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span className="wnf-btn__icon">{icon}</span>}
    </>
  );

  const linkTo = to || href;

  if (linkTo) {
    // Check if it's an external link
    const isExternal = typeof linkTo === 'string' && linkTo.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={linkTo}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        to={linkTo}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
