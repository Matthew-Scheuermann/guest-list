const BASE_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608-FTB-CT-WEB-PT/guests";

export const fetchGuests = async () => {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("error fetching guests:", error);
    return [];
  }
};
