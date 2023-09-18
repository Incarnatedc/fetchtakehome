import { Dog, CurrentSearch } from "../context/types";
import { SearchFilters } from "./types";
import { BASE_URL } from "./config";

// Every Dog call in /dogs/ path goes here
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

// I couldn't find out a better way to do this :(
function convertFiltersToSearchParams(filters: SearchFilters): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (filters.breeds) {
    filters.breeds.forEach((breed, index) => {
      searchParams.append(`breeds[${index}]`, breed);
    });
  }
  if (filters.zipCodes) {
    filters.zipCodes.forEach((zipCode, index) => {
      searchParams.append(`zipCodes[${index}]`, zipCode);
    });
  }
  if (filters.ageMin !== undefined) {
    searchParams.append('ageMin', filters.ageMin.toString());
  }
  if (filters.ageMax !== undefined) {
    searchParams.append('ageMax', filters.ageMax.toString());
  }
  if (filters.size !== undefined) {
    searchParams.append('size', filters.size.toString());
  }
  if (filters.from) {
    searchParams.append('from', filters.from);
  }
  if (filters.sort) {
    searchParams.append('sort', filters.sort);
  }

  return searchParams;
}

export const searchDogsAPI = async (filter: SearchFilters = {}): Promise<CurrentSearch> => {
  const uri = 'search';

  const queryParams = convertFiltersToSearchParams(filter);

  try {
    const response = await callDogsAPI(`${uri}?${queryParams}`, 'GET', null);
    return response as CurrentSearch;
  } catch (error) {
    throw error;
  }
};

export const getBreeds = async (): Promise<string[]> => {
  const uri = 'breeds';
  return callDogsAPI(uri, 'GET', null);
}


export const getDogs = async (dogsIDs: string[]): Promise<Dog[]> => {
  const uri = '';
  const response = await callDogsAPI(uri, 'POST', dogsIDs);
  return response;
}