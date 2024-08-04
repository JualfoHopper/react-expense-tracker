import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
type Props = {};

function ExpenseChart({}: Props) {
  const { transactions }: any = useGlobalState();
  const total = transactions.reduce(
    (acc: any, transaction: any) => (acc += transaction.amount),
    0
  );
  const totalIncome = transactions
    .filter((transaction: any) => transaction.amount > 0)
    .reduce((acc: any, transaction: any) => (acc += transaction.amount), 0);
  const totalExpense =
    transactions
      .filter((transaction: any) => transaction.amount < 0)
      .reduce((acc: any, transaction: any) => (acc += transaction.amount), 0) *
    -1;
  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
  const totalIncomePercentage = 100 - totalExpensePercentage;
  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensePercentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
