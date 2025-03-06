"use client";

import Link from "next/link";

const AllLeads = () => {
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
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLeads;
