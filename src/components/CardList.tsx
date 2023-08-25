import { IExpense } from "../utils/default-data";
import { IGroup, groupingPerDay } from "../utils/utility";
import CardItem from "./CardItem";

interface CardListProps {
  expense: IExpense[];
}

const CardList = ({ expense }: CardListProps) => {
  const grouping: IGroup[] = groupingPerDay(expense);

  if (grouping.length !== 0) {
    return (
      <div className="mt-20 grid grid-cols-4 gap-2">
        {grouping.map((item) => (
          <CardItem key={item.tanggal} {...item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="mt-52 p-3 border rounded-sm shadow-md">
        <p className="font-semibold">Tidak ada catatan pengeluaran bulan ini</p>
      </div>
    );
  }
};

export default CardList;
