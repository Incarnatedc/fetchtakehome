import { useState } from "react";
import { logout } from "../../service/auth";
import { Navigate } from "react-router-dom";

type logoutButtonProps = {
  className?: string
}

const LOGIN_ROUTE:string = '/login';

export default function LogoutButton({className}: logoutButtonProps ) {
  const defaultStyles = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const classNames = (className) ? `${defaultStyles} ${className}` : defaultStyles;
  const [redirect, setRedirect] = useState(false);

  const onClick = async () => {
    console.log("Logout");
    try{
      await logout();
      setRedirect(true);
    }catch(e){
      //TODO handle when logout API fails :(
    }
  }

  return (
    <>
      <button className={classNames} onClick={onClick}>Logout</button>
      {redirect && <Navigate to={LOGIN_ROUTE}/>}
    </>
  );
}