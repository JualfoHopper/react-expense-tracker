import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import AppReducer from "./AppReducer";

// sacamos el [] de useReducer y lo ponemos en una constante
const initialState = {
  transactions: [],
};
export const Context = createContext({});

//Creamos un customHook para utilizar el contexto sin tener que importar
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

//creamos una función para usar el context
//nos regresará un componente que usa el contexto
export const GlobalProvider = ({ children }: any) => {
  //Necesitamos un estado que sea dinámico, no sólo con el valor de total y products
  //   const [state, setState] = useState([]);

  //Se repite la instrucción anterior usando useReducer
  //se debe definir la función que se usa en los args. Se crea archivo AppReducer
  //   const [state, setState] = useReducer(AppReducer, initialState);
  //  se cambia setState por dispatch cuando utilizamos useReducer
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState,
    // Se obtienen valores iniciales de local storage
    () => {
      const localData = localStorage.getItem("transactions");
      return localData ? JSON.parse(localData) : initialState;
    }
  );
  // utilizo el useEffect para vigilar el cambio de estado
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);
  // creo una función para que añada Transactions
  // description, amount se quitan como argumento y se unen en un objeto transaction
  const addTransaction = (transaction: any) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id: any) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    //Esta forma es para contextos con estado estático
    // <Context.Provider value={{ total: 100, products: 49 }}>
    //esta forma es para contextos con estado dinámico
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
