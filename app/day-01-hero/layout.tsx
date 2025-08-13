import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export default function dayOneHeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${orbitron.variable}`}>{children}</div>;
}
