/** Formats an IQD price, or "السعر عند الاستفسار" when no price is set yet. */
export function formatPriceIQD(priceIQD: number | null): string {
  if (priceIQD === null) return "السعر عند الاستفسار";
  return `${priceIQD.toLocaleString("en-US")} د.ع`;
}
