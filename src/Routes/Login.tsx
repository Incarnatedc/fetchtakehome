import LoginForm from "../components/login/LoginForm";
import Greeting from "../components/login/Greeting";

export default function Login() {
  //Now hardcoded redirect route :(
  const onLoginRoute:string = '/';
  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center">
        <Greeting/>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-gray-200 space-y-8">
        <LoginForm redirectTo={onLoginRoute} />
      </div>
    </div>
  );
}