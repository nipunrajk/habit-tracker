import { useEffect, useState } from "react";
import { getFormattedDateParts } from "../utils/date";

export const useCurrentDateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return getFormattedDateParts(now);
};
