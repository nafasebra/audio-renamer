import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

interface BaseProps {
  color: "primary" | "dark";
  variant: "solid" | "outline";
  tag?: 'a' | 'button';
  children: React.ReactNode | React.ReactNode[];
}

interface ButtonProps extends BaseProps {
  link?: never;
  type?: 'button' | 'submit' | 'reset';
  attr?: ButtonHTMLAttributes<HTMLButtonElement>;
  handlers?: Record<string, () => void>;
}

interface AnchorProps extends BaseProps {
  link: string;
  type?: 'button' | 'submit' | 'reset';
  attr?: AnchorHTMLAttributes<HTMLAnchorElement>;
  handlers?: Record<string, () => void>;
}

const theme = {
  primary: {
    solid: "border-primary bg-primary text-white hover:opacity-75",
    outline: "border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
  },
  dark: {
    solid: "border-black bg-black text-white hover:opacity-75",
    outline: "border-black bg-transparent text-black hover:bg-black hover:text-white"
  },
}

const Button: FC<ButtonProps | AnchorProps> = (props) => {
  const { children, variant, tag = "button", color, type = "button", attr, link, handlers = {}, ...rest } = props;
  
  const commonProps = {
    className: `py-2 px-4 flex items-center justify-center rounded-lg gap-3 border ${theme[color][variant]} transition-all`,
    ...rest
  }

  const eventHandlers = {
    ...(handlers || {}),
    onClick: handlers?.onClick || undefined,
  };

  if (tag === "button") {
    return (
      <button type={type} {...commonProps} {...eventHandlers}>
        {children}
      </button>
    );
  } else {
    return (
      <a href={link} {...commonProps} {...eventHandlers}>
        {children}
      </a>
    );
  }
}

export default Button;