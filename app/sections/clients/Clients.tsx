"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { clients } from "../../data/clients";

export default function Clients() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 space-y-20">

      <div>
        <h2 className="mb-12 text-center text-3xl font-semibold">Experiências Profissionais e Clientes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => {
            const mainResult = client.desc.results?.[0];

            return (
              <div key={client.name} className="rounded-xl border border-zinc-200 p-5 bg-white shadow-sm hover:shadow-md transition">

                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={48}
                    height={48}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-sm text-zinc-600">{client.role}</p>
                    <p className="text-xs text-zinc-500">
                      {client.type} • {client.desc.period}
                    </p>
                  </div>
                </div>

                {mainResult && (
                  <div className="mb-4 flex gap-2 text-sm">
                    <CheckCircle size={16} className="text-green-500 mt-0.5" />
                    <span>{mainResult}</span>
                  </div>
                )}

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="mb-3 text-sm font-medium text-purple-600 flex items-center gap-1"
                >
                  {openIndex === index ? "Ocultar" : "Ver mais"}
                  {openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openIndex === index && (
                  <div className="mt-2 text-sm space-y-3">

                    <ul className="space-y-1">
                      {client.desc.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle size={14} className="text-zinc-500 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {client.desc.results?.length ? (
                      <ul className="mt-2 space-y-1">
                        {client.desc.results.map((item, idx) => (
                          <li key={idx} className="flex gap-2">
                            <CheckCircle size={14} className="text-green-500 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {client.desc.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {client.desc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}


                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
