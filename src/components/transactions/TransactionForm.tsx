import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  // añado una llamada a función para añadir Transactions
  const { addTransaction }: any = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (e: any) => {
    e.preventDefault();
    addTransaction({
      id: self.crypto.randomUUID(),
      description,
      amount: +amount, //este + convierte la variable en número
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600  text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          step="0.1"
          placeholder="00.00"
          onChange={(e) => setAmount(Number(e.target.value))}
          className="bg-zinc-600  text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-indigo-700  text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Añade Transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
