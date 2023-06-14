import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
const DEFAULT_DATE = "YYYY-MM-DD HH:mm:ss";
export function dateFormater(utcTime: string, formater: string = DEFAULT_DATE) {
  return dayjs.utc(utcTime).utcOffset(8).format(formater);
}
