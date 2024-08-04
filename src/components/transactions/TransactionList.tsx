import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  //Recupero los datos del estado
  const { transactions }: any = useGlobalState();
  console.log(transactions);

  return (
    <div>
      <h3 className="text-slate-300 font-bold block">History</h3>
      <ul>
        {transactions.map((transaction: any) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
