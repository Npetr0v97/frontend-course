import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const onCancelHandler = () => {
    setDisplayForm(false);
  };

  const onClickHandler = () => {
    setDisplayForm(true);
  };
  const addNewExpenseBtn = (
    <div className="new-expense__actions new-expense__button">
      <button onClick={onClickHandler}>Add New Expense</button>
    </div>
  );
  return (
    <div className="new-expense">
      {displayForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      ) : (
        addNewExpenseBtn
      )}
    </div>
  );
};

export default NewExpense;
