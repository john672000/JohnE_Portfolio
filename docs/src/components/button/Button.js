import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};


export default function Button({ icon, text, className, href, newTab, theme, radius = 20, onClick, title, type = "button", }) {
  const sharedStyles = {
    color: theme.body,
    backgroundColor: theme.text,
    border: `solid 1px ${theme.text}`,
    borderRadius: `${radius}px`,
    outline: "none",
  };

  const commonProps = {
    className: "main-button",
    style: sharedStyles,
    onMouseEnter: (e) => onMouseEnter(e, theme.text, theme.body),
    onMouseOut: (e) => onMouseOut(e, theme.body, theme.text),
  };


  return (
    <div className={className}>
      {href ? (
        <a
          {...commonProps}
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {text}
          {icon}
        </a>
      ) : (
        <button {...commonProps}
          onClick={onClick}
          title={title}
          type={type}
        >
          {text}
          {icon}
        </button>
      )}
    </div>
  );
}
