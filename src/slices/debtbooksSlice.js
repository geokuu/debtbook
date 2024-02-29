import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const debtbooksSlice = createSlice({
  name: "debtbooks",
  initialState: [],
  reducers: {
    updateDebtbooks: (state, action) => {
      return state.map((debtbook) =>
        debtbook.id === action.payload.id ? action.payload : debtbook,
      );
    },
    deleteDebtbook: (state, action) => {
      return state.filter((debtbook) => debtbook.id !== action.payload);
    },
    createDebtbook: (state, action) => {
      const members = [];
      const id = nanoid();
      action.payload.names.forEach((name) =>
        members.push({
          id: nanoid(),
          name: name,
          balance: 0,
        }),
      );
      state.push({
        id: id,
        title: action.payload.title,
        members: members,
        transactions: [],
      });
    },
  },
});
export const { createDebtbook, updateDebtbooks, deleteDebtbook } =
  debtbooksSlice.actions;
export default debtbooksSlice.reducer;
