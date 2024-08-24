import { Logo } from "@/components/shared/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Logo />
    </main>
  );
}
