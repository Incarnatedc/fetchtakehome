import { useEffect, useState } from "react";
import { isValidEmail } from "../../util/util";
import InputForm from "./InputForm";
import { User } from "../../service/types";
import { login } from "../../service/auth";
import { Navigate } from "react-router-dom";

const AUTH_ERROR_MESSAGE = "Invalid credentials.";

type loginProps = {
  redirectTo: string
}

export default function LoginForm({redirectTo}: loginProps) {
  const [userName, setUserName] = useState('');
  const [email, setMail] = useState('');
  const [isValidForm, setValidForm] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const enableLoginButton = () => {
    if(userName !== '' && isValidEmail(email)){
      setValidForm(true);
    }
  }

  const handleLogin = async (ev: React.FormEvent<HTMLElement>) => {
    console.log(userName, email);
    const user: User = {
      name: userName,
      email: email
    };
    ev.preventDefault();
    try {
      await login(user);
      console.log("You're in! :D");
      console.log(redirectTo);
      setRedirect(true);
    }catch(e){
      //Catch any error here, it could be 401 or 500 but now just a generic error message
      setLoginError(AUTH_ERROR_MESSAGE);
    }
  }

  useEffect(() => {
    enableLoginButton();
  }, [userName, email]);

  return (
    <div className="w-full px-8 md:px-32 lg:px-24">
      <form onSubmit={handleLogin} className="bg-white rounded-md shadow-2xl p-5">
        <h1 className="text-3xl mb-20">Hello, welcome back!</h1>
        <InputForm type="string" name="username" label="Username" value={userName} onChange={setUserName}/>
        <InputForm type="email" name="email" label="E-mail" value={email} onChange={setMail}/>
        {loginError && <p className="mt-2 text-red-500">{loginError}</p>}
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${isValidForm ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isValidForm}
        >
          Login
        </button>
      </form>
      {redirect && <Navigate to={redirectTo}/>}
    </div>
  );
}