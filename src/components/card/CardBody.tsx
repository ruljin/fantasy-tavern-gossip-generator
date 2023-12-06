import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export const CardBody = ({ children }: CardProps) => <div>{children}</div>;
