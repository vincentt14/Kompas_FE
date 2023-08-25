import { useEffect, useState } from "react";

import CardList from "./components/CardList";
import { IExpense } from "./utils/default-data";
import { convertToRupiah, msToTime } from "./utils/utility";
import { getAllExpense } from "./utils/default-data";

const App = () => {
  const dateTime: Date = new Date();
  const [expense, setExpense] = useState<IExpense[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState(0);

  useEffect(() => {
    setExpense(getAllExpense());
    setLoading(false);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const getTotalExpense = (): string => {
    const amounts = expense.map((item) => item.pengeluaran);
    const totalExpense = amounts.reduce((a, b) => a + b);
    return convertToRupiah(totalExpense);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    expense.push({
      jam: msToTime(new Date().getTime()),
      nama: nama,
      pengeluaran: harga,
      tanggal: new Date().toLocaleString("id", { day: "numeric", month: "long" }),
    });
    setModal(false);
  };

  return (
    <div className="m-8 flex flex-col items-center justify-center gap-1">
      <h1 className="font-semibold text-3xl">Diari Jajan {`${dateTime.toLocaleString("id", { month: "long", year: "numeric" })}`}</h1>
      {expense.length != 0 && <p className="text-xl">Pengeluaran Bulan ini {getTotalExpense()}</p>}
      <button onClick={toggleModal} className="bg-blue-600 text-white border py-2 px-4 shadow-md rounded-sm mt-2 font-semibold">
        Tambah Item
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <form className="modal-content" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold">Tambah Entri</h2>
            <div className="my-2">
              <label>
                Nama
                <input type="text" required className="border-2 p-2 w-full rounded-sm" placeholder="Cth: Pisang Goreng" name="nama" onChange={(e) => setNama(e.target.value)} />
              </label>
            </div>
            <div className="my-2">
              <label>
                Harga
                <input type="number" required className="border-2 p-2 w-full rounded-sm" placeholder="Cth: 10000" name="harga" onChange={(e) => setHarga(+e.target.value)} />
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={toggleModal} className="bg-gray-600 text-white border py-2 px-4 shadow-md rounded-sm mt-2 font-semibold">
                Batal
              </button>
              <button type="submit" className="bg-blue-600 text-white border py-2 px-4 shadow-md rounded-sm mt-2 font-semibold">
                Kirim
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? <div> Loading </div> : <CardList expense={expense} />}
    </div>
  );
};

export default App;
