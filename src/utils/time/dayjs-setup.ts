// utils/dayjs-setup.ts
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/ko";

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.locale("ko");

export default dayjs;
