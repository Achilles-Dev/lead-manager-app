"use client";

import { addLead } from "@/api/lead";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

const AddLead = ({ baseURL }) => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    const inputName = e.target;
    const data = {
      name: inputName["name"].value,
      email: inputName["email"].value,
      status: inputName["status"].value,
    };

    const lead = await addLead({ data, baseURL });

    if (typeof lead === "object") {
      router.push("/");
    } else {
      setMessage(`${lead}!`);
    }
  };

  return (
    <div className="flex flex-col">
      <p>Add Lead Manager</p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="space-y-12 w-1/2">
            <div className="border-b border-gray-900/10 pb-6">
              <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="Name of lead manager"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 ">
                  <label
                    htmlFor="status"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Status
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="status"
                      name="status"
                      autoComplete="status"
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value={"New"}>New</option>
                      <option value={"Engaged"}>Engaged</option>
                      <option value={"ProposalSent"}>Proposal Sent</option>
                      <option value={"ClosedWon"}>Closed-Won</option>
                      <option value={"ClosedLost"}>Closed-Lost</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-4 ">
                  <p className="text-red-500">{message}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-start gap-x-6 w-1/2">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLead;
