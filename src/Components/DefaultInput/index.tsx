import style from "./styles.module.css";

type DefaulInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaulInputProps) {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} - Caso necessite de condicional*/}
      <label htmlFor={id}>{labelText}</label>
      <input className={style.input} id={id} type={type} {...rest} />
    </>
  );
}
