export const formatDate = (
  date: string,
  locales: string | string[] = "en-US"
): string => {
  return Intl.DateTimeFormat(locales, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(date));
};
