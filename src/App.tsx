import { useEffect, useState } from "react";

import { IExpense } from "./utils/default-data";
import CardList from "./components/CardList";
import { convertToRupiah } from "./utils/utility";
import { getAllExpense } from "./utils/default-data";

const App = () => {
  const dateTime: Date = new Date();
  const [expense, setExpense] = useState<[] | IExpense[]>([]);
  const [totalAllExpense, setTotalAllExpense] = useState(5650475);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setExpense(getAllExpense());
    setLoading(false);
  }, []);

  return (
    <div className="m-10 flex flex-col items-center justify-center gap-1">
      <h1 className="font-semibold text-3xl">Diari Jajan {`${dateTime.toLocaleString("id", { month: "long", year: "numeric" })}`}</h1>
      <p className="text-xl">Pengeluaran Bulan ini {convertToRupiah(totalAllExpense)}</p>

      {loading ? <div> Loading </div> : <CardList expense={expense} />}
    </div>
  );
};

export default App;
