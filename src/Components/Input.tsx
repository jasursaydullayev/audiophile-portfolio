import { InpI, InpL } from "./ClassName";

type InputTypes = {
  labelText: string;
  placeholder: string;
  typeInput: string;
};

function Input({ labelText, placeholder, typeInput }: InputTypes) {
  return (
    <form>
      <label className={InpL}>
        {labelText}
      </label>
      <br />
      <input className={InpI} type={typeInput} placeholder={placeholder} />
    </form>
  );
}

export default Input;
