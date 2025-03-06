export const baseURL = process.env.SERVER_URL;

export const getLeads = async () => {
  console.log("Base Url:", baseURL);
  const data = await fetch(`${baseURL}/leads`);
  const leads = await data.json();
  return leads;
};

export const addLead = async ({ data, baseURL }) => {
  console.log(baseURL, data);
  const result = await fetch(`${baseURL}/lead`, {
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
