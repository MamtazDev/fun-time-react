export const registerUser = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/users/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
