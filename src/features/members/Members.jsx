import { useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MembersStyle } from "./membersStyle.js";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance } from "../../slices/activeDebtbookSlice.js";
import PropTypes from "prop-types";

function Members({
  toggleInput,
  setOperation,
  setActiveMember,
  togglePersonalDebts,
}) {
  const dispatch = useDispatch();
  const activeDebtbook = useSelector((state) => state.activeDebtbook);

  useEffect(() => {
    const balances = {};

    activeDebtbook.transactions.forEach((transaction) => {
      const { source, destination, amount } = transaction;
      balances[source] = (balances[source] || 0) - amount;
      balances[destination] = (balances[destination] || 0) + amount;
    });

    activeDebtbook.members.forEach((member) => {
      const { id } = member;
      if (!(id in balances)) {
        balances[id] = 0;
      }
    });
    Object.entries(balances).forEach(([id, balance]) => {
      dispatch(updateBalance({ id, balance }));
    });
  }, [activeDebtbook.transactions]);

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;
    if (destination.droppableId !== source.droppableId) {
      setOperation({
        source: source.droppableId,
        destination: destination.droppableId,
      });
      toggleInput();
    }
  };

  const getStyle = (balance, dragOver) => {
    if (dragOver) {
      if (balance < 0) {
        return "orange drag-over";
      } else if (balance > 0) {
        return "blue drag-over";
      } else {
        return "drag-over";
      }
    } else {
      if (balance < 0) {
        return "orange";
      } else if (balance > 0) {
        return "blue";
      }
    }
  };

  function MemberList(member) {
    return (
      <Droppable droppableId={member.id} isCombineEnabled>
        {(provided, snapshot) => (
          <div
            onClick={() => {
              togglePersonalDebts();
              setActiveMember(member);
            }}
            className={
              "droppable " + getStyle(member.balance, snapshot.isDraggingOver)
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="content">
              <h3>{member.name}</h3>
              {member.balance !== 0 && (
                <p className="text--17">{member.balance}</p>
              )}
            </div>
            <MembersStyle>
              <Draggable draggableId={member.id} index={0}>
                {(provided, snapshot) => (
                  <div
                    className="transaction"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <div
                      className={
                        snapshot.isDragging ? "draggable--on" : "draggable--off"
                      }
                    ></div>
                  </div>
                )}
              </Draggable>
            </MembersStyle>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }

  return (
    <MembersStyle>
      <DragDropContext onDragEnd={handleDragEnd}>
        {activeDebtbook.members.map((member) => (
          <MemberList {...member} key={member.id} />
        ))}
      </DragDropContext>
    </MembersStyle>
  );
}

Members.propTypes = {
  toggleInput: PropTypes.func,
  setOperation: PropTypes.func,
  setActiveMember: PropTypes.func,
  togglePersonalDebts: PropTypes.func,
};

export default Members;
