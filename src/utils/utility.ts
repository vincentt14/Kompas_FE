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

export const take = () => {
  return 0;
};
