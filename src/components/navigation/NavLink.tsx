"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavLinkItem } from "./navigation.data";

interface NavLinkProps {
  item: NavLinkItem;
  scrolled: boolean;
  onClick?: () => void;
}

export default function NavLink({ item, scrolled, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);

  // Styling based on navbar state (transparent over dark hero vs scrolled floating light bg)
  const textColor = isActive
    ? scrolled
      ? "text-brand-orange font-medium"
      : "text-brand-orange font-medium"
    : scrolled
    ? "text-neutral-dark hover:text-brand-orange"
    : "text-white/80 hover:text-white";

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`relative py-2 px-1 flex flex-col items-center group transition-colors duration-300 rounded focus-ring ${textColor}`}
    >
      {/* Subtle text shift on hover */}
      <span className="relative overflow-hidden block">
        <span className="block transition-transform duration-300 group-hover:-translate-y-0.5">
          {item.label}
        </span>
      </span>

      {/* Premium line indicator */}
      {isActive ? (
        <motion.span
          layoutId="nav-indicator"
          className="absolute bottom-0 h-[2px] bg-brand-orange rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : (
        <span className="absolute bottom-0 w-0 h-[2px] bg-brand-orange rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full" />
      )}
    </Link>
  );
}
