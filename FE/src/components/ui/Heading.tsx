import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
};

export default function Heading({ children, level = 1, className = "" }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = {
    1: "text-4xl font-bold tracking-tight leading-snug",
    2: "text-2xl font-semibold",
    3: "text-xl font-medium",
  };
  return <Tag className={`${baseStyles[level]} ${className}`}>{children}</Tag>;
}