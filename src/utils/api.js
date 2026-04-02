export const loginUser = async (email, password) => {
  const res = await fetch(
    "https://staging-backend.thebobproject.co/api/v2/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "password",
        email,
        password,
      }),
    }
  );

  return res.json();
};

export const getEvents = async (filters = {}) => {
  const params = new URLSearchParams({
    page: 1,
    per_page: 100,
    sort: "newest",
    who_can_register: "public_users_bob_members",
    ...filters,
  });

  const res = await fetch(
    `https://staging-backend.thebobproject.co/api/public/v2/event/list?${params}`
  );

  return res.json();
};