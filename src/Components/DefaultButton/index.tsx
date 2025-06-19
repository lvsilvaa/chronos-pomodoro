import style from "./styles.module.css";

type DefaulButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green",
  ...prop
}: DefaulButtonProps) {
  return (
    <>
      <button className={`${style.button} ${style[color]}`} {...prop}>
        {icon}
      </button>
    </>
  );
}
