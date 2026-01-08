"use client";

import Image from "next/image";

const technologies = [
  { name: "Angular", logo: "/icons/angular.svg" },
  { name: "AWS", logo: "/icons/aws.svg" },
  { name: "C#", logo: "/icons/c.svg" },
  { name: "Figma", logo: "/icons/figma.svg" },
  { name: "Firebase", logo: "/icons/fire.svg" },
  { name: "Google console", logo: "/icons/google.svg" },
  { name: "Java", logo: "/icons/java.svg" },
  { name: "JS", logo: "/icons/js.svg" },
  { name: "Looker studio", logo: "/icons/looker.svg" },
  { name: "Apple", logo: "/icons/mac.svg" },
  { name: "MySQL", logo: "/icons/mysql.svg" },
  { name: "Postman", logo: "/icons/postman.svg" },
  { name: "Power BI", logo: "/icons/power-bi.svg" },
  { name: "React", logo: "/icons/react.svg" },
  { name: "SQL", logo: "/icons/sql.svg" },
  { name: "TS", logo: "/icons/ts.svg" },
  { name: "VUE", logo: "/icons/vue.svg" },
];

export default function Technologies() {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="flex w-max animate-carousel gap-10 px-6 sm:px-10">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex-shrink-0 opacity-80 hover:opacity-100 transition"
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
