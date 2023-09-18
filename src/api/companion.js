export const getSearchCompanion = async (queryArray) => {
  const base_url = `${import.meta.env.VITE_BASE_URL}/api/companion/search?`;
  const queryString = queryArray.join("&");

  const fullUrl = base_url + queryString;

  const res = await fetch(fullUrl);
  return res.json();
};
