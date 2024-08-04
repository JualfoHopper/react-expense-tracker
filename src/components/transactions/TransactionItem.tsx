import { useGlobalState } from "../../context/GlobalState";

function TransactionItem({ transaction }: any) {
  const { deleteTransaction }: any = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-2 py-2 rounded-lg mb mb-2 w-full flex justify-between">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
            console.log(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
