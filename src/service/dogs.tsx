import { BASE_URL } from "./config";

export const getBreeds = async (): Promise<string[]> => {
  const uri = '/dogs/breeds';
  const url = `${BASE_URL}${uri}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });
    const data: string[] = await response.json();
    return data;
  }catch(e) {
    throw e;
  }
}