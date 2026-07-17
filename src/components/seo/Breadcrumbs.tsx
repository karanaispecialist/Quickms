import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

export default function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ name: "Home", item: "/" }, ...items]
    : items;

  return (
    <>
      {/* 1. Schema.org Breadcrumb Injection */}
      <BreadcrumbJsonLd items={allItems} />

      {/* 2. Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] tracking-wider text-neutral-light/40 uppercase font-semibold"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />}

              {isLast ? (
                <span className="text-brand-orange truncate font-bold" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.item}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
