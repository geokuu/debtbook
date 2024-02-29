import { SideBarStyle } from "./sideBarStyle.js";
import {
  deleteDebtbook,
  updateDebtbooks,
} from "../../slices/debtbooksSlice.js";
import {
  switchDebtbook,
  inactivateDebtbook,
} from "../../slices/activeDebtbookSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddIcon from "../../assets/icons/add.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import PropTypes from "prop-types";

function SideBar({ showSidebar, toggleSidebar }) {
  const dispatch = useDispatch();
  const activeDebtbook = useSelector((state) => state.activeDebtbook);
  const debtbooks = useSelector((state) => state.debtbooks);

  return (
    <SideBarStyle className={showSidebar ? "visible" : "hidden"}>
      <div className="header">
        <h1 className="heading--M">My debtbooks</h1>
        <button className="button btn--S" onClick={toggleSidebar}>
          <CloseIcon />
        </button>
      </div>
      <div className="container">
        {debtbooks.map((debtbook) => (
          <button
            className={
              "button btn--L space-between " +
              (debtbook.id === activeDebtbook.id ? "btn--green" : "")
            }
            key={debtbook.id}
            onClick={() => {
              dispatch(updateDebtbooks(activeDebtbook));
              dispatch(switchDebtbook(debtbook));
            }}
          >
            {debtbook.title}
            <i
              className="icon-container"
              onClick={(e) => {
                dispatch(
                  inactivateDebtbook({
                    target: debtbook.id,
                    debtbooks: debtbooks,
                  }),
                );
                dispatch(deleteDebtbook(debtbook.id));
                e.stopPropagation();
              }}
            >
              <DeleteIcon />
            </i>
          </button>
        ))}
        <Link className="button btn--S" to="/debtbook/create">
          <AddIcon />
        </Link>
      </div>
    </SideBarStyle>
  );
}

SideBar.propTypes = {
  showSidebar: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default SideBar;
