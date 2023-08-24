const expense: { jam: string; tanggal: string; nama: string; pengeluaran: number }[] = [
  {
    jam: "03:15",
    tanggal: "18 Februari 2021",
    nama: "Ayam Tangkap",
    pengeluaran: 77249,
  },
  {
    jam: "03:15",
    tanggal: "18 Februari 2021",
    nama: "Mie Rebus",
    pengeluaran: 32154,
  },
  {
    jam: "00:20",
    tanggal: "17 Februari 2021",
    nama: "Soto Kuning",
    pengeluaran: 34992,
  },
  {
    jam: "05:59",
    tanggal: "17 Februari 2021",
    nama: "Ayam Geprek",
    pengeluaran: 37674,
  },
  {
    jam: "05:45",
    tanggal: "16 Februari 2021",
    nama: "Otak-otak",
    pengeluaran: 11971,
  },
];

export const getAllExpense = () => {
  return expense;
};
