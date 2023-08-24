import { IExpense } from "../utils/default-data";

interface CardListProps {
  expense: IExpense[];
}

const CardList = ({ expense }: CardListProps) => {
  console.log(expense);
  return <div>bangbang</div>;
};

export default CardList;
