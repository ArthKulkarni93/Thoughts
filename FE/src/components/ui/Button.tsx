import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ children, onClick, variant = "primary", className = "" }: Props) {
  const base = "rounded-xl px-10 py-3 font-semibold shadow-xl transition-all duration-200 text-center";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
