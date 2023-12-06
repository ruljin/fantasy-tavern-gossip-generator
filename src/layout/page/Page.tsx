import type { ReactNode } from "react";

import styles from "./Page.module.css";

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => (
  <main className={styles.page}>
    {children}
    <footer className={styles.page__footer}>
      Created by{" "}
      <a
        className={styles["page__footer--link"]}
        href="https://github.com/ruljin"
        rel="noreferrer"
        target="_blank"
      >
        Ruljin
      </a>
    </footer>
  </main>
);
