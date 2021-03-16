import axios from 'axios';

export default {
  async addExpense(context, payload) {
    await axios
      .post('http://localhost:9000/api/expenses', payload)
      .then((response) => {
        console.log(response);
        context.commit('addExpense', response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  clearExpense(context, payload) {
    context.commit('clearExpense', payload);
  },
  async getAllExpenses(context) {
    await axios
      .get('http://localhost:9000/api/expenses')
      .then((response) => {
        context.commit('getAllExpenses', response.data.expenses);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
