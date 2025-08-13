import { components } from "@/lib/components";

import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 items-center justify-center">
      {components.map((component) => (
        <Link
          key={component.name}
          href={component.link}
          className="bg-black text-white rounded-md p-2 m-2 flex flex-col items-center justify-center hover:bg-black/80"
        >
          <span>{component.description}</span>
        </Link>
      ))}
    </main>
  );
}
