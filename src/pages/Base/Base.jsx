import { BaseStyle } from "./baseStyle.js";
import Members from "../../features/members/Members.jsx";
import SideBar from "../../features/sideBar/SideBar.jsx";
import Input from "../../features/Input/Input.jsx";
import PersonalDebts from "../../features/personalDebts/PersonalDebts.jsx";
import History from "../../features/history/History.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HistoryIcon from "../../assets/icons/history.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import AddIcon from "../../assets/icons/add.svg?react";

export const Base = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showPersonalDebts, setShowPersonalDebts] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [operation, setOperation] = useState({});
  const [activeMember, setActiveMember] = useState({
    id: undefined,
    name: undefined,
    state: undefined,
  });
  const activeDebtbook = useSelector((state) => state.activeDebtbook);

  const toggleOverlay = (mode) => {
    setShowBackground(!showBackground);
    switch (mode) {
      case "history":
        setShowHistory(!showHistory);
        break;
      case "input":
        setShowInput(!showInput);
        break;
      case "personalDebts":
        setShowPersonalDebts(!showPersonalDebts);
        break;
      case "sidebar":
        setShowSidebar(!showSidebar);
        break;
    }
  };

  const closeOverlay = ({ target }) => {
    if (target === document.getElementById("background")) {
      setShowBackground(false);
      setShowHistory(false);
      setShowPersonalDebts(false);
      setShowInput(false);
      setShowSidebar(false);
    }
  };

  return (
    <div>
      <BaseStyle>
        <div className="header">
          <h1 className="heading--L">{activeDebtbook.title}</h1>
          <div className="btn-container">
            <button
              className="button btn--S"
              onClick={() => toggleOverlay("history")}
            >
              <HistoryIcon />
            </button>
            <button
              className="button btn--S"
              onClick={() => toggleOverlay("sidebar")}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        <Members
          toggleInput={() => toggleOverlay("input")}
          setOperation={setOperation}
          setActiveMember={setActiveMember}
          togglePersonalDebts={() => toggleOverlay("personalDebts")}
        />
        <Link className="button btn--S" to="/debtbook/add">
          <AddIcon />
        </Link>
        <p className="instruction">Swipe for transaction</p>
        <div
          id="background"
          className={showBackground ? " background show" : "background"}
          onClick={closeOverlay}
        >
          <SideBar
            showSidebar={showSidebar}
            toggleSidebar={() => toggleOverlay("sidebar")}
          />
          <Input
            showInput={showInput}
            toggleInput={() => toggleOverlay("input")}
            operation={operation}
          />
          <PersonalDebts
            activeMember={activeMember}
            showPersonalDebts={showPersonalDebts}
            togglePersonalDebts={() => toggleOverlay("personalDebts")}
          />
          <History
            showHistory={showHistory}
            toggleHistory={() => toggleOverlay("history")}
          />
        </div>
      </BaseStyle>
    </div>
  );
};
