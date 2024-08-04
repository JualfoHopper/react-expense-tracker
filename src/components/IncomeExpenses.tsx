import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  // Se importa el contexto
  const { transactions }: any = useGlobalState();
  // Se obtiene el valor que se usará
  const amounts = transactions.map((transaction: any) => transaction.amount);

  const income = amounts
    .filter((item: any) => item > 0)
    .reduce((acc: any, item: any) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter((item: any) => item < 0)
      .reduce((acc: any, item: any) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
