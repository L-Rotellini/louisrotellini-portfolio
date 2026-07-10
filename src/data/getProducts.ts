import { products, type Product } from "@/data/products";
import { productsEn } from "@/data/i18n/products.en";
import type { Locale } from "@/i18n/config";

export function getProducts(locale: Locale): Product[] {
  if (locale === "fr") return products;
  return products.map((p) => {
    const o = productsEn[p.id];
    if (!o) return p;
    const { imageAlt, ...rest } = o;
    return {
      ...p,
      ...rest,
      image: imageAlt ? { ...p.image, alt: imageAlt } : p.image,
    };
  });
}

export type { Product };
