export const sendRequest = async ({ data, id }) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/booking/add/${id}`,
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

export const sendSms = async (data) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/sms/send-initial-message`,
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

export const getAllBookings = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/booking`);
  return res.json();
};
