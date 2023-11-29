import { Typography } from "../../constants/Typography";

import styles from "./Text.module.css";

export interface TypographyProps {
	children: string;
	type?: Typography;
}

export const Text = ({ children, type = "p" }: TypographyProps) => {
	if (type === "h1") {
		return (
			<h1 className={`${styles.text} ${styles.text__header}`}>{children}</h1>
		);
	}

	return (
		<p className={`${styles.text} ${styles.text__paragraph}`}>{children}</p>
	);
};
