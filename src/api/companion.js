export const getSearchCompanion = async (queryArray) => {
  const base_url = `${import.meta.env.VITE_BASE_URL}/api/companion/search?`;
  const queryString = queryArray.join("&");

  const fullUrl = base_url + queryString;

  const res = await fetch(fullUrl);
  return res.json();
};

export const createCompanion = async (data) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/companion/add`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};

export const uploadImage = async (data) => {
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`,
    {
      method: "POST",
      body: data,
    }
  );
  return res.json();
};

export const getAllCompanions = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/companion`);
  return res.json();
};

export const deleteCompanion = async(id)=>{
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/companion/delete/${id}`,{
    method:"DELETE"
  })
  return res.json()
}
