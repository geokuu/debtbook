import { CreateStyle } from "./createStyle.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDebtbook } from "../../slices/debtbooksSlice.js";
import { switchDebtbook } from "../../slices/activeDebtbookSlice.js";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/add.svg?react";

export const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [members, setMembers] = useState(2);
  const [formData, setFormData] = useState({
    title: "",
    names: [],
  });
  const debtbooks = useSelector((state) => state.debtbooks);

  useEffect(() => {
    if (formSubmitted) {
      dispatch(switchDebtbook(debtbooks[debtbooks.length - 1]));
      navigate("/debtbook/app");
    }
  }, [debtbooks]);

  const handleChange = ({ target }, i) => {
    if (target.name === "title") {
      setFormData((prevState) => ({ ...prevState, title: target.value }));
    } else {
      const updatedNames = [...formData.names];
      updatedNames[i] = target.value;
      setFormData((prevState) => ({ ...prevState, names: updatedNames }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { title: "", names: [] };
    if (formData.title !== undefined && formData.title !== "") {
      updatedFormData.title = formData.title;
    } else updatedFormData.title = "Generic";
    const updatedNames = [...formData.names];
    for (let i = 0; i < members; i++) {
      if (formData.names[i] !== undefined && formData.names[i] !== "") {
        updatedNames[i] = formData.names[i];
      } else updatedNames[i] = "Person " + (i + 1);
    }
    updatedFormData.names = updatedNames;
    dispatch(createDebtbook(updatedFormData));
    setFormSubmitted(true);
  };

  const getFields = () => {
    const fields = [];
    for (let i = 0; i < members; i++) {
      fields.push(
        <input
          className="text-field--S"
          name="name"
          key={i}
          value={formData.names[i]}
          onChange={(e) => handleChange(e, i)}
          type="text"
          maxLength="12"
          placeholder={"Person " + (i + 1)}
        />,
      );
    }
    return fields;
  };

  return (
    <CreateStyle onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="heading--L">Create a debtbook</h1>
        <div className="content-container">
          <div className="input-container">
            <h1 className="heading--S">Title</h1>
            <input
              className="text-field--S"
              name="title"
              onChange={(e) => handleChange(e, undefined)}
              value={formData.title}
              type="text"
              maxLength="12"
              placeholder="Tap to add"
            />
          </div>
          <div className="input-container">
            <h1 className="heading--S">Members</h1>
            {getFields()}
            <button
              className="button btn--S "
              onClick={(e) => {
                e.preventDefault();
                setMembers(members + 1);
              }}
            >
              <AddIcon />
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="button btn--M btn--green align-right align-bottom"
      >
        Create
      </button>
    </CreateStyle>
  );
};
