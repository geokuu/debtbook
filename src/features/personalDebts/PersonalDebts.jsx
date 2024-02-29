import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../slices/activeDebtbookSlice.js";
import { PersonalDebtsStyle } from "./personalDebtsStyle.js";
import CloseIcon from "../../assets/icons/close.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import PropTypes from "prop-types";
function PersonalDebts({
  activeMember,
  showPersonalDebts,
  togglePersonalDebts,
}) {
  const dispatch = useDispatch();
  const [credit, setCredit] = useState([]);
  const [debt, setDebt] = useState([]);
  const activeDebtbook = useSelector((state) => state.activeDebtbook);

  useEffect(() => {
    setCredit([]);
    setDebt([]);
    const recurringCredit = new Map();
    const recurringDebt = new Map();
    activeDebtbook.transactions.forEach((transaction) => {
      if (
        transaction.destination === activeMember.id ||
        transaction.source === activeMember.id
      ) {
        if (transaction.destination === activeMember.id) {
          if (recurringCredit.has(transaction.source)) {
            recurringCredit.set(
              transaction.source,
              recurringCredit.get(transaction.source) + transaction.amount,
            );
          } else {
            recurringCredit.set(transaction.source, transaction.amount);
          }
        }
        if (transaction.source === activeMember.id) {
          if (recurringDebt.has(transaction.destination)) {
            recurringDebt.set(
              transaction.destination,
              recurringDebt.get(transaction.destination) + transaction.amount,
            );
          } else {
            recurringDebt.set(transaction.destination, transaction.amount);
          }
        }
      }
    });
    recurringCredit.forEach((amount, source) => {
      updateState(source, amount, setCredit);
    });
    recurringDebt.forEach((amount, destination) => {
      updateState(destination, amount, setDebt);
    });
  }, [activeMember, activeDebtbook.transactions]);

  function updateState(id, amount, setState) {
    const member = activeDebtbook.members.find((member) => member.id === id);
    setState((prevState) => [...prevState, { name: member.name, amount }]);
  }

  return (
    <PersonalDebtsStyle className={showPersonalDebts ? "visible" : "hidden"}>
      <div className="header">
        <h1 className="heading--M">{activeMember.name}</h1>
        <button className="button btn--S" onClick={togglePersonalDebts}>
          <CloseIcon />
        </button>
      </div>
      <div className="container">
        {credit.length > 0 && (
          <div className="credit-container">
            {credit.map((member, index) => (
              <div className="row" key={index}>
                <p>{member.name}</p>
                <p>+{member.amount}</p>
              </div>
            ))}
          </div>
        )}
        {debt.length > 0 && (
          <div className="debt-container">
            {debt.map((member, index) => (
              <div className="row" key={index}>
                <p>{member.name}</p>
                <p>−{member.amount}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="button btn--L"
        onClick={() => {
          dispatch(deleteMember(activeMember.id));
          togglePersonalDebts();
        }}
      >
        <DeleteIcon />
        Delete member
      </button>
    </PersonalDebtsStyle>
  );
}

PersonalDebts.propTypes = {
  activeMember: PropTypes.object,
  showPersonalDebts: PropTypes.bool,
  togglePersonalDebts: PropTypes.func,
};
export default PersonalDebts;
