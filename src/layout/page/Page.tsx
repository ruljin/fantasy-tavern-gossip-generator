import type { ReactNode } from "react";

import styles from "./Page.module.css";

export interface PageProps {
	children: ReactNode;
}

export const Page = ({ children }: PageProps) => (
	<main className={styles.page}>{children}</main>
);
