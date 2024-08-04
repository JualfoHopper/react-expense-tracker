export default (state: any, action: any) => {
  console.log(action.type, " hola");

  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state, //se pone por si hubiera más datos
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
