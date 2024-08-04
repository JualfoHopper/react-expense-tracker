// import { useContext } from "react";
// import { Context } from "../context/GlobalState"; //estas dos líneas se pueden ahorrar creando un custom hook
import { useGlobalState } from "../context/GlobalState"; //estoy importando en custom hook

function Balance() {
  //   const data = useContext(Context);
  const { transactions }: any = useGlobalState();
  //obtengo sólo los amounts de los transactions
  const amounts = transactions.map((transactions: any) => transactions.amount);
  const totalAmounts = amounts.reduce(
    (acc: any, item: any) => (acc += item),
    0
  );

  return (
    <div className="flex justify-between">
      <h3>Your balance</h3>
      <h1 className="font-bold">${totalAmounts}</h1>
    </div>
  );
}

export default Balance;
