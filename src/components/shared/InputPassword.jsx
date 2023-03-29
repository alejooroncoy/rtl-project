import { useRef } from "react";
import { BsEyeFill } from "react-icons/bs";

const InputPassword = ({ input }) => {
  const inputPassword = useRef();
  const eyeIcon = useRef();
  const handleClickShow = () => {
    eyeIcon.current.classList.toggle("button--icon-eye--close");
    if (inputPassword.current.type === "text")
      return (inputPassword.current.type = "password");
    inputPassword.current.type = "text";
  };
  return (
    <>
      <label htmlFor={input.id}>{input.label}:</label>
      <div className="form__input-container">
        <button
          type="button"
          onClick={handleClickShow}
          ref={eyeIcon}
          className="button button--icon-eye"
        >
          <BsEyeFill />
        </button>
        <input
          ref={inputPassword}
          className="form__input"
          placeholder={input.placeholder}
          required
          id={input.id}
          name="password"
          type="password"
        />
      </div>
    </>
  );
};

export default InputPassword;
