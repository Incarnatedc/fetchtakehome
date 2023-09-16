import { User } from "./types";

const BASE_URL = "https://frontend-take-home-service.fetch.com";

export const login = async (user:User) => {
  const uri = '/auth/login';
  const url = `${BASE_URL}${uri}`
  try {
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