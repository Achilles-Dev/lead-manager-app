import { baseURL, getLeads } from "@/api/lead";
import AddLead from "./AddLead";

export default function LeadPage() {
  const leads = getLeads(baseURL);
  return (
    <div className="p-5 flex flex-col gap-5">
      <AddLead baseURL={baseURL} leadsPromise={leads} />
    </div>
  );
}
