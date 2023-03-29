import { Form } from "react-router-dom";
import InputPassword from "../../shared/InputPassword";

const AuthFormInput = ({ input }) =>
  input.type === "password" ? (
    <InputPassword input={input} />
  ) : (
    <>
      <label className="form__label" htmlFor={input.id}>
        {input.label}:
      </label>
      <div className="form__input-container">
        {input.Icon && <input.Icon size={15} />}
        <input
          className="form__input"
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          id={input.id}
          required={input.required || true}
        />
      </div>
    </>
  );

const AuthForm = ({
  inputs,
  buttonText,
  textToLink,
  action,
  method = "POST",
}) => {
  return (
    <Form className="form" action={action} method={method}>
      {inputs?.map((input) => (
        <AuthFormInput key={crypto.randomUUID()} input={input} />
      ))}
      <button className="button button--auth">{buttonText}</button>
      {textToLink}
    </Form>
  );
};

export default AuthForm;
