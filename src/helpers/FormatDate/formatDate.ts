import dayjs from "dayjs";
export const formatDate = (date: string) => {
  return dayjs(new Date(date)).format("DD/MM/YYYY");
};
