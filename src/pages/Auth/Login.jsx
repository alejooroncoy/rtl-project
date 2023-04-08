import Helmet from "react-helmet";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsFacebook } from "react-icons/bs";
import AuthForm from "../../components/Auth/Auth/AuthForm";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import fromFormDataToJson from "../../utils/fromFormDataToJson";

export const actionLogin = async ({ request }) => {
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

const Login = () => {
  const inputs = [
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
  const handleClickSignInFacebook = () => {
    // TODO: Magic Link to Facebook
  };
  const handleClickSignInGoogle = () => {
    // TODO: Magic Link to Google
  };
  return (
    <>
      <Helmet>
        <title>Login | Rtl project</title>
      </Helmet>
      <div className="section-container section-container--auth">
        <img
          className="section__img"
          width={200}
          height={60}
          src={Logo}
          alt="logo"
        />
        <h2 className="section__title">Sign In</h2>
        <p className="section__description">Please login to your account</p>
        <AuthForm
          action="/auth/login"
          inputs={inputs}
          buttonText="Sign In"
          textToLink={
            <h3 className="form__message">
              Don’t have an account?{" "}
              <Link className="form__message__link" to="../register" relative>
                Sign Up
              </Link>
            </h3>
          }
        />
        <h4 className="section__text-bottom">Or sign up with</h4>
        <button
          onClick={handleClickSignInFacebook}
          className="button button--magic-link"
        >
          Sign Up usign Facebook <BsFacebook size={20} color="#0983df" />
        </button>
        <button
          onClick={handleClickSignInGoogle}
          className="button button--magic-link"
        >
          Sign Up usign Google <FcGoogle size={20} />
        </button>
      </div>
    </>
  );
};

export default Login;
