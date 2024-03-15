import { AddStyle } from "./addStyle.js";
import { addMember } from "../../slices/activeDebtbookSlice.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close.svg?react";

export const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const handleChange = ({ target }) => {
    setFormData(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData === undefined || formData === "") {
      const updatedFormData = "Person ";
      dispatch(addMember(updatedFormData));
    } else dispatch(addMember(formData));
    navigate("/debtbook/app");
  };

  return (
    <AddStyle onSubmit={handleSubmit}>
      <div className="container">
        <Link className="button btn--S align-right" to="/debtbook/app">
          <CloseIcon />
        </Link>
        <div className="input-container">
          <h1 className="heading--L">Add a member</h1>
          <input
            className="text-field--S"
            type="text"
            onChange={handleChange}
            value={formData}
            placeholder="Person"
            maxLength="12"
          />
        </div>
      </div>
      <button type="submit" className="button btn--M btn--green align-right">
        Add
      </button>
    </AddStyle>
  );
};
