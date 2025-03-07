import { baseURL } from "@/api/lead";
import AddLead from "./AddLead";

export default function LeadPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <AddLead baseURL={baseURL} />
    </div>
  );
}
