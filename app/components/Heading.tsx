import React, { ComponentProps, PropsWithChildren } from "react";

export interface HeadingProps extends ComponentProps<"h1"> {
  level?: number;
}

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  level,
  children,
  ...props
}) => {
  let Tag: React.ElementType<HeadingProps> = "h1"; // Default to 'header' element
  if (level !== undefined) {
    // Construct the tag based on the level
    Tag = `h${level}` as React.ElementType<HeadingProps>;
  }

  return <Tag {...props}>{children}</Tag>;
};
