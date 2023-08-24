import { useState } from "react";
import { convertToRupiah } from "./utils/utility";

const App = () => {
  const [totalExpense, setTotalExpense] = useState(5650475);

  return (
    <div className="m-10 flex flex-col items-center justify-center gap-1">
      <h1 className="font-semibold text-3xl">Diari Jajan Februari 2021</h1>
      <p className="text-xl">Pengeluaran Bulan ini {convertToRupiah(totalExpense)}</p>
    </div>
  );
};

export default App;
