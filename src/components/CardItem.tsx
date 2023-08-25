import { IGroup, convertToRupiah } from "../utils/utility";

const CardItem = ({ tanggal, data }: IGroup) => {
  const totalExpense = (): string => {
    const amount = data.map((item) => item.pengeluaran);
    const totalExpense = amount.reduce((a, b) => a + b);
    return convertToRupiah(totalExpense);
  };

  return (
    <div className="border rounded-sm shadow-md p-3 flex flex-col">
      <p className="font-bold text-xl py-2">{tanggal}</p>
      {data.map((item) => (
        <div key={item.nama} className="border-t-2 py-1 w-full grid grid-cols-6">
          <p className="py-1">{item.jam}</p>
          <p className="py-1 col-span-3">{item.nama}</p>
          <p className="py-1 col-span-2 flex justify-end">{convertToRupiah(item.pengeluaran)}</p>
        </div>
      ))}
      <div className="flex justify-end gap-6 font-bold border-t-2 border-slate-400 py-2">
        <p>Total</p>
        <p>{totalExpense()}</p>
      </div>
    </div>
  );
};

export default CardItem;
