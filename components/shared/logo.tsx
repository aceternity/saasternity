import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={className}>
      <Image
        fetchPriority="high"
        decoding="async"
        priority
        draggable={false}
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
      />
    </Link>
  );
};
