import { Status } from "@/types/types";


export const calculateStatus = (status: Status) => {
    return status == "Dead" ? 'Мёртв 🔴' : status == 'Alive' ?  'Жив 🟢' : 'Неизвестно 🟡';
}