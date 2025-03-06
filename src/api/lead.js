export const baseURL = process.env.SERVER_URL;

export const getLeads = async () => {
  const data = await fetch(`${baseURL}/leads`);
  const leads = await data.json();
  if (leads) {
    return leads;
  } else {
    return [];
  }
};

export const addLead = async ({ data, baseURL }) => {
  const result = await fetch(`${baseURL}/leads`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      status: data.status,
    }),
  });
  const lead = await result.json();
  return lead;
};
