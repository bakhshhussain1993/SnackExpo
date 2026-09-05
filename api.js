const API_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
