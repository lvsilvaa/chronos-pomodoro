import type React from "react";
import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className="content">{children}</div>
    </div>
  );
}
