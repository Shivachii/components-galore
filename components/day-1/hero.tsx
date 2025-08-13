import Link from "next/link";
import Image from "next/image";
// import HeroCarousel from "./carousel";

export default function DayOneHero() {
  return (
    <header className="bg-white h-[500px] ">
      <Navbar />
      <div className="bg-black flex flex-col justify-center w-6xl h-11/12 z-50 mx-auto mt-20">
        {/* HERO */}
        <div className="flex flex-row items-center gap-8 p-4 m-4">
          {/* Hero Text */}
          <div className="flex flex-col gap-3">
            <div className=" bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent font-extrabold text-5xl ">
              Adrenaline & Asphalt
            </div>
            <span className="text-lg font-medium text-white italic">
              Stories of rivalry, innovation, and sheer velocity
            </span>
            <Link
              href={"#"}
              className="mt-4 group  text-white flex flex-col gap-2 w-max"
            >
              Explore the World of F1 &rarr;
              <span className="bg-white w-0 group-hover:w-full h-1 transition-all duration-500" />
            </Link>
            {/* <HeroCarousel /> */}
          </div>
          {/* Images */}
          <div className="flex flex-col gap-4 translate-x-40">
            <Image
              src="/day-1/f1-dark.jpg"
              alt="F1 image"
              width={400}
              height={200}
            />
            <Image
              src="/day-1/f1.jpg"
              alt="F1 image"
              className=""
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// Simple Navbar Component
export function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <div className="font-extrabold text-2xl">F1 STUDIOS</div>
      <div className="">
        {navbarLinks.map((link, id: number) => (
          <Link href={link.href} key={id} className="gap-4 m-2 font-medium">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export const navbarLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];
