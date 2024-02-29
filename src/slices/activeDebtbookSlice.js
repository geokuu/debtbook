import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const activeDebtbookSlice = createSlice({
  name: "activeDebtbook",
  initialState: {},
  reducers: {
    updateBalance: (state, action) => {
      const member = state.members.find(
        (member) => member.id === action.payload.id,
      );
      member.balance = action.payload.balance;
    },
    addMember: (state, action) => {
      state.members.push({
        id: nanoid(),
        name: action.payload,
        balance: 0,
      });
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload,
      );
      state.transactions = state.transactions.filter(
        (transaction) =>
          transaction.source !== action.payload &&
          transaction.destination !== action.payload,
      );
    },
    createTransaction: (state, action) => {
      const { operation, output } = action.payload;
      state.transactions.push({
        source: operation.source,
        destination: operation.destination,
        amount: output,
      });
    },
    deleteLastTranaction: (state) => {
      state.transactions.pop();
    },
    switchDebtbook: (state, action) => {
      return action.payload;
    },
    inactivateDebtbook: (state, action) => {
      const { target, debtbooks } = action.payload;
      if (target === state.id) {
        return debtbooks.find((debtbook) => debtbook.id !== state.id);
      }
    },
  },
});

export const {
  updateBalance,
  addMember,
  deleteMember,
  createTransaction,
  deleteLastTranaction,
  switchDebtbook,
  inactivateDebtbook,
} = activeDebtbookSlice.actions;
export default activeDebtbookSlice.reducer;
