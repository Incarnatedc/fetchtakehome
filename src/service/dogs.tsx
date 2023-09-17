import { Dog } from "../context/types";
import { BASE_URL } from "./config";


async function callDogsAPI(uri: string, method = 'POST', data: object | null){
  const path = '/dogs/';
  const url = `${BASE_URL}${path}${uri}`;
  const requestOptions: RequestInit = {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw response;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const getBreeds = async (): Promise<string[]> => {
  const uri = 'breeds';
  return callDogsAPI(uri, 'GET', null);
}

export const searchDogs = async (): Promise<Dog[]> => {
  const uri = '/search';
  return callDogsAPI(uri, 'POST', null);
}