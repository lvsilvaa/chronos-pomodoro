import styles from "./styles.module.css";
import "../../style/global.css";
import "../../style/theme.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}> {children}</h1>;
}
