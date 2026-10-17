const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";

export const fetchGuests = async () => {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching guests:", error);
    return [];
  }
};

export const fetchGuest = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Failed to fetch guest details ${id}:`, error);
    return null;
  }
};
