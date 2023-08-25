import CardItem from "./CardItem";
import { IExpense } from "../utils/default-data";
import { IGroup, groupingPerDay } from "../utils/utility";

interface CardListProps {
  expense: IExpense[];
}

const CardList = ({ expense }: CardListProps) => {
  const grouping: IGroup[] = groupingPerDay(expense);

  grouping.sort((a, b) => {
    var dateA = new Date(a.tanggal).getTime();
    var dateB = new Date(b.tanggal).getTime();
    return dateA > dateB ? 1 : -1;
  });

  if (grouping.length !== 0) {
    return (
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
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
