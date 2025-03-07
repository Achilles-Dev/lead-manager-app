import { baseURL, getLeads } from "@/api/lead";
import AllLeads from "./(lead)/AllLeads";

export default async function Home() {
  const leads = await getLeads(baseURL);

  return (
    <div className="h-screen">
      <AllLeads leads={leads} />
    </div>
  );
}
