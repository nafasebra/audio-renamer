import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface BaseProps {
  color: "primary" | "dark";
  variant: "solid" | "outline";
  tag: 'a' | 'button';
  children: React.ReactNode | React.ReactNode[];
}

interface ButtonProps extends BaseProps {
  link?: never;
  type: 'button' | 'submit' | 'reset';
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

interface AnchorProps extends BaseProps {
  link: string;
  type?: 'button' | 'submit' | 'reset';
  props: AnchorHTMLAttributes<HTMLAnchorElement>;
}

const theme = {
  primary: {
    solid: "border-primary bg-primary text-white hover:opacity-75",
    outline: "bg-transparent text-primary hover:bg-primary hover:text-white"
  },
  dark: {
    solid: "border-black bg-black text-white hover:opacity-75",
    outline: "bg-transparent text-black hover:bg-black hover:text-white"
  },
}

function Button(props: ButtonProps | AnchorProps) {
  const { children, variant, tag, color, ...rest } = props;
  
  const commonProps = {
    className: `py-2 px-4 flex items-center justify-center gap-3 border ${theme[color][variant]}`
  }

  if(tag === "button") {
    return (
      <button type={props.type} {...commonProps} {...rest}>
        {children}
      </button>
    );
  } else {
    return (
      <a href={props.link} {...commonProps} {...rest}>
        {children}
      </a>
    );
  }

}

export default Button;
