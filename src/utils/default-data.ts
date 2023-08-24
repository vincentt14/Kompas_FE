import { msToTime } from "./utility";

export interface IExpense {
  jam: string;
  tanggal: string;
  nama: string;
  pengeluaran: number;
}

const expense: IExpense[] = [
  {
    jam: msToTime(new Date("August 18, 2023 03:15:00").getTime()),
    tanggal: `${new Date("August 18, 2023").toLocaleString("id", { day: "numeric", month: "long" })}`,
    nama: "Ayam Tangkap",
    pengeluaran: 77249,
  },
  {
    jam: msToTime(new Date("August 18, 2023 03:15:00").getTime()),
    tanggal: `${new Date("August 18, 2023").toLocaleString("id", { day: "numeric", month: "long" })}`,
    nama: "Mie Rebus",
    pengeluaran: 32154,
  },
  {
    jam: msToTime(new Date("August 17, 2023 00:20:00").getTime()),
    tanggal: `${new Date("August 17, 2023").toLocaleString("id", { day: "numeric", month: "long" })}`,
    nama: "Soto Kuning",
    pengeluaran: 34992,
  },
  {
    jam: msToTime(new Date("August 17, 2023 05:59:00").getTime()),
    tanggal: `${new Date("August 17, 2023").toLocaleString("id", { day: "numeric", month: "long" })}`,
    nama: "Ayam Geprek",
    pengeluaran: 37674,
  },
  {
    jam: msToTime(new Date("August 16, 2023 05:45:00").getTime()),
    tanggal: `${new Date("August 16, 2023").toLocaleString("id", { day: "numeric", month: "long" })}`,
    nama: "Otak-otak",
    pengeluaran: 11971,
  },
];

export const getAllExpense = () => {
  return expense;
};
