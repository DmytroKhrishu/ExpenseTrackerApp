import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'bike',
    amount: 14999.99,
    date: new Date('2024-05-05'),
  },
  {
    id: 'e2',
    description: 'another bike',
    amount: 8999.99,
    date: new Date('2024-04-06'),
  },
  {
    id: 'e3',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e4',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e5',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e6',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e7',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e8',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
  {
    id: 'e9',
    description: 'bike computer',
    amount: 999.99,
    date: new Date('2024-04-10'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload.id)
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data, expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
