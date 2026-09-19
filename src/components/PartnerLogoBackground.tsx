"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const partners = [
  {
    name: "Telekom",
    src: "/partners/telekom.jpg",
    position: "left-[2%] top-[8%]",
    width: "w-20 md:w-28",
    phase: 0,
    direction: 1,
  },
  {
    name: "Vodafone",
    src: "/partners/vodafone.svg",
    position: "right-[3%] top-[14%]",
    width: "w-16 md:w-24",
    phase: 0.8,
    direction: -1,
  },
  {
    name: "O2",
    src: "/partners/o2.svg",
    position: "left-[6%] top-[30%]",
    width: "w-20 md:w-28",
    phase: 1.5,
    direction: -1,
  },
  {
    name: "1&1",
    src: "/partners/1und1.jpg",
    position: "right-[8%] top-[35%]",
    width: "w-16 md:w-24",
    phase: 2,
    direction: 1,
  },
  {
    name: "congstar",
    src: "/partners/congstar.jpg",
    position: "left-[3%] top-[52%]",
    width: "w-24 md:w-32",
    phase: 2.8,
    direction: 1,
  },
  {
    name: "Blau",
    src: "/partners/blau.jpg",
    position: "right-[5%] top-[57%]",
    width: "w-20 md:w-28",
    phase: 3.5,
    direction: -1,
  },
  {
    name: "yourfone",
    src: "/partners/yourfone.png",
    position: "left-[8%] top-[75%]",
    width: "w-24 md:w-32",
    phase: 4.2,
    direction: -1,
  },
];

type FloatingLogoProps = {
  partner: (typeof partners)[number];
};

function FloatingLogo({ partner }: FloatingLogoProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, (value) => {
    return Math.sin(value / 520 + partner.phase) * 24 * partner.direction;
  });

  const y = useTransform(scrollY, (value) => {
    return Math.sin(value / 460 + partner.phase) * 42;
  });

  const rotate = useTransform(scrollY, (value) => {
    return Math.sin(value / 900 + partner.phase) * 1.5 * partner.direction;
  });

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
      }}
      className={`absolute ${partner.position} ${partner.width}`}
    >
      <Image
        src={partner.src}
        alt=""
        width={240}
        height={140}
        className="h-auto w-full object-contain opacity-[0.10] grayscale md:opacity-[0.13]"
      />
    </motion.div>
  );
}

export default function PartnerLogoBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {partners.map((partner) => (
        <FloatingLogo key={partner.name} partner={partner} />
      ))}
    </div>
  );
}
