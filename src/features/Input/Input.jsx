import { createTransaction } from "../../slices/activeDebtbookSlice.js";
import { InputStyle } from "./inputStyle.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "../../assets/icons/send.svg?react";
import DeleteIcon from "../../assets/icons/del-keyboard.svg?react";
import ArrowIcon from "../../assets/icons/arrow-big.svg?react";
import PropTypes from "prop-types";

function Input({ showInput, toggleInput, operation }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(undefined);
  const activeDebtbook = useSelector((state) => state.activeDebtbook);

  useEffect(() => {
    if (output !== undefined) {
      dispatch(createTransaction({ output, operation }));
      toggleInput();
      setInput("");
      setOutput(undefined);
    }
  }, [output]);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      const roundedResult = Math.round(result * 100) / 100;
      setOutput(roundedResult);
    } catch (error) {
      setInput("Error");
    }
  };

  const getSource = () => {
    const source = activeDebtbook.members.find(
      (member) => member.id === operation.source,
    );
    if (source) {
      return source.name;
    }
  };

  const getDestination = () => {
    const destination = activeDebtbook.members.find(
      (member) => member.id === operation.destination,
    );
    if (destination) {
      return destination.name;
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <InputStyle className={showInput ? "visible" : "hidden"}>
      <p className="text--23 names-container">
        {getSource()} <ArrowIcon /> {getDestination()}
      </p>
      <div className="text-field-container">
        <input className="text-field--L" type="text" value={input} readOnly />
        <button
          className="button btn--send btn--green"
          onClick={() => handleCalculate()}
        >
          <SendIcon />
        </button>
      </div>
      <div className="buttons-container">
        <div className="row">
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button className="button btn--calc" onClick={() => handleDelete()}>
            <DeleteIcon />
          </button>
        </div>
        <div className="row">
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>
        </div>
        <div className="row">
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
          <button
            className="button btn--calc"
            onClick={() => handleButtonClick("-")}
          >
            −
          </button>
        </div>
      </div>
    </InputStyle>
  );
}

Input.propTypes = {
  showInput: PropTypes.bool,
  toggleInput: PropTypes.func,
  operation: PropTypes.object,
};

export default Input;
