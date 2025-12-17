import Image from "next/image";

const clients = [
  { name: "Cliente 1", logo: "/clients/alumni.png" },
  { name: "Cliente 2", logo: "/clients/bihands.png" },
  { name: "Cliente 3", logo: "/clients/ecodoctor.png" },
  { name: "Cliente 4", logo: "/clients/felipe-leite.png" },
  { name: "Cliente 5", logo: "/clients/ifs.png" },
  { name: "Cliente 6", logo: "/clients/nibo.png" },
  { name: "Cliente 7", logo: "/clients/petlove.png" },
  { name: "Cliente 8", logo: "/clients/sagrado-coracao.png" },
];

export default function Clients() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Clientes
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 items-center">
        {clients.map((client) => (
          <Image
            key={client.name}
            src={client.logo}
            alt={client.name}
            width={70}
            height={70}
            className="rounded-2xl mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
