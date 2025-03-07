import { baseURL, getLeads } from "@/api/lead";
import AllLeads from "./(lead)/AllLeads";
import { Suspense } from "react";

export default function Home() {
  const leads = getLeads(baseURL);

  return (
    <div className="h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <AllLeads leads={leads} />
      </Suspense>
    </div>
  );
}
