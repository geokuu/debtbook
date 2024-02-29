import { HistoryStyle } from "./historyStyle.js";
import { deleteLastTranaction } from "../../slices/activeDebtbookSlice.js";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../../assets/icons/close.svg?react";
import UndoIcon from "../../assets/icons/undo.svg?react";
import ArrowIcon from "../../assets/icons/arrow-small.svg?react";
import PropTypes from "prop-types";

function History({ showHistory, toggleHistory }) {
  const dispatch = useDispatch();
  const activeDebtbook = useSelector((state) => state.activeDebtbook);

  const getSource = (id) => {
    const source = activeDebtbook.members.find((member) => member.id === id);
    if (source) {
      return source.name;
    }
  };

  const getDestination = (id) => {
    const destination = activeDebtbook.members.find(
      (member) => member.id === id,
    );
    if (destination) {
      return destination.name;
    }
  };

  return (
    <HistoryStyle className={showHistory ? "visible" : "hidden"}>
      <div className="header">
        <h1 className="heading--M">History</h1>
        <div className="btn-container">
          <button
            className="button btn--M"
            onClick={() => dispatch(deleteLastTranaction())}
          >
            <UndoIcon />
            Undo
          </button>
          <button className="button btn--S" onClick={toggleHistory}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="history-container">
        {activeDebtbook.transactions.toReversed().map((transaction, index) => (
          <div className="row" key={index}>
            <p className="names-container">
              {getSource(transaction.source)}
              <ArrowIcon />
              {getDestination(transaction.destination)}
            </p>
            <p>{transaction.amount}</p>
          </div>
        ))}
      </div>
    </HistoryStyle>
  );
}

History.propTypes = {
  showHistory: PropTypes.bool,
  toggleHistory: PropTypes.func,
};

export default History;
