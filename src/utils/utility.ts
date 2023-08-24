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
