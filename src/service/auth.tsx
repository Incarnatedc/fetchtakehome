import { User } from "./types";
import { BASE_URL } from "./config";

export const login = async (user:User) => {
  const uri = '/auth/login';
  const url = `${BASE_URL}${uri}`
  try{
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ name: user.name, email: user.email }),
    });
    return response;
  }catch(e){
    throw e;
  }
}

export const logout = async () => {
  const uri = '/auth/logout';
  const url = `${BASE_URL}${uri}`
  try{
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include'
    })
    return response;
  }catch(e){
    throw e;
  }
}