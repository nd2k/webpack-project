export default {
  addExpense(state, payload) {
    state.expenses.push(payload);
    return state;
  },
  clearExpense(state, payload) {
    state.expenses.splice(payload.index, 1);
    return state;
  },
  getAllExpenses(state, payload) {
    payload.forEach((expense) => {
      state.expenses.push(expense);
    });
    return state;
  },
};
