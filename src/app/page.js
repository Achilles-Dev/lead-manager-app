import { getLeads } from "@/api/lead";
import AllLeads from "./(lead)/AllLeads";

export default async function Home() {
  const leads = await getLeads();

  return (
    <div className="h-screen">
      <AllLeads leads={leads} />
    </div>
  );
}
