import { baseURL, getLeads } from "@/api/lead";
import AllLeads from "./(lead)/AllLeads";

export default async function Home() {
  let leads = [];
  if (baseURL !== undefined) {
    leads = await getLeads();
  }

  return (
    <div className="h-screen">
      <AllLeads leads={leads} />
    </div>
  );
}
