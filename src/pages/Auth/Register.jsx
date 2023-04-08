import { MdOutlineEmail, MdPerson } from "react-icons/md";
import Helmet from "react-helmet";
import { BsEyeFill, BsFacebook } from "react-icons/bs";
import AuthForm from "../../components/Auth/Auth/AuthForm";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import fromFormDataToJson from "../../utils/fromFormDataToJson";

export const actionRegister = async ({ request }) => {
  const formData = await request.formData();
  const body = fromFormDataToJson(formData);
  const response = await fetch("URL", {
    method: request.method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = await response.json();
  return data;
};

const Register = () => {
  const inputs = [
    {
      id: "name",
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      Icon: MdPerson,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
      Icon: MdOutlineEmail,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      Icon: BsEyeFill,
    },
  ];
  const handleClickSignUpFacebook = () => {
    // TODO: Magic Link to Facebook
  };
  const handleClickSignUpGoogle = () => {
    // TODO: Magic Link to Google
  };
  return (
    <>
      <Helmet>
        <title>Register | Rtl project</title>
      </Helmet>
      <div className="section-container section-container--auth">
        <img
          className="section__img"
          width={200}
          height={60}
          src={Logo}
          alt="logo"
        />
        <h2 className="section__title">Create an Account</h2>
        <p className="section__description">Continue where you left off</p>
        <AuthForm
          action="/auth/register"
          inputs={inputs}
          buttonText="Sign Up"
          textToLink={
            <h3 className="form__message">
              Already a user?{" "}
              <Link className="form__message__link" to="../login" relative>
                Sign In
              </Link>
            </h3>
          }
        />
        <h4 className="section__text-bottom">Or sign up with</h4>
        <button
          onClick={handleClickSignUpFacebook}
          className="button button--magic-link"
        >
          Sign Up usign Facebook <BsFacebook size={20} color="#0983df" />
        </button>
        <button
          onClick={handleClickSignUpGoogle}
          className="button button--magic-link"
        >
          Sign Up usign Google <FcGoogle size={20} />
        </button>
      </div>
    </>
  );
};

export default Register;
