export function formatCurrency(value: number, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

export function daysSince(date: string | Date) {
  const now = new Date();
  const then = new Date(date);
  const diff = Math.max(0, now.getTime() - then.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function formatDaysAgo(days: number) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}
