import type { ReactNode } from "react";

// import styles from "./Card.module.css";

export interface CardProps {
	children: ReactNode;
}

export const CardFooter = ({ children }: CardProps) => (
	<footer>{children}</footer>
);
