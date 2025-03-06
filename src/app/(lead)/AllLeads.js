"use client";

import Link from "next/link";

const AllLeads = ({ leads }) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p>LEAD MANAGERS</p>
        <Link prefetch={true} href={"/lead"}>
          <p className="px-2 py-1 border border-sky-500 text-sky-500 rounded-sm text-sm">
            ADD MANAGER
          </p>
        </Link>
      </div>
      <div className="flex">
        <table className="table-auto w-full">
          <thead>
            <tr className="">
              <th>Number</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 &&
              leads.map((lead, index) => (
                <tr key={lead.id}>
                  <td>{index + 1}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLeads;
