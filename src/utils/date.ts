export const getFormattedDateParts = (date: Date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(date);

  const dateInfo = Object.fromEntries(
    parts.map(({ type, value }) => [type, value])
  );

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return {
    weekday: dateInfo.weekday,
    day: dateInfo.day,
    month: dateInfo.month,
    year: dateInfo.year,
    time,
  };
};
