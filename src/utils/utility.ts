import { IExpense } from "./default-data";

export const convertToRupiah = (nominal: number): string => {
  if (nominal === 0) return "Rp 0";

  let rupiah = "";
  const reversedNominal = nominal.toString().split("").reverse().join("");
  for (let i = 0; i < reversedNominal.length; i++) {
    if (i % 3 === 0) {
      rupiah += reversedNominal.substr(i, 3) + ".";
    }
  }

  return `Rp ${rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("")}`;
};

export const msToTime = (duration: number): string => {
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return `${hours}:${minutes}`;
};

/*
0 :
  tanggal: "25 Agustus"
  data: [
      0:  {
        nama: "Mie Rebus",
        pengeluaran: 10000
        jam: "20:15",
      },
      1:  {
        nama: "Soto Kuning",
        pengeluaran: 32000
        jam: "12:25",
      },
    ]
  }
*/

export interface IGroup {
  tanggal: string;
  data: {
    nama: string;
    pengeluaran: number;
    jam: string;
  }[];
}

export const groupingPerDay = (expense: IExpense[]): IGroup[] => {
  const grouped: IGroup[] = [];
  const newExpense = expense.filter((value, index, self) => index === self.findIndex((item) => item.tanggal === value.tanggal));

  for (let i = 0; i < newExpense.length; i++) {
    grouped.push({
      tanggal: newExpense[i].tanggal,
      data: [],
    });
  }

  for (let i = 0; i < expense.length; i++) {
    for (let j = 0; j < grouped.length; j++) {
      if (expense[i].tanggal === grouped[j].tanggal) {
        grouped[j].data.push({
          nama: expense[i].nama,
          pengeluaran: expense[i].pengeluaran,
          jam: expense[i].jam,
        });
      }
    }
  }

  return grouped;
};
