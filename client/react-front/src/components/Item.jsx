import React, { useState } from "react";

export default function Item({
  title,
  isComplete,
  id,
  handleStatusChange,
  handleTitleChange,
  handleDelete,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const EditIcons = () => (
    <>
      <i
        className="fas fa-spell-check"
        onClick={(e) => {
          handleTitleChange(id, newTitle);
          setIsEdit(!isEdit);
        }}
      ></i>
      <i className="fas fa-ban" onClick={(e) => setIsEdit(!isEdit)}></i>
    </>
  );

  return (
    <li className="list-group-item">
      {isComplete ? (
        <i
          className="fas fa-check-circle"
          onClick={(e) => handleStatusChange(id, !isComplete)}
        ></i>
      ) : (
        <i
          className="fas fa-circle"
          onClick={(e) => handleStatusChange(id, !isComplete)}
        ></i>
      )}

      {isEdit && (
        <input
          placeholder={title}
          className="todo-text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      )}
      {!isEdit && <span className="todo-text">{title}</span>}
      <span className="button-group">
        {!isEdit ? (
          <i className="fas fa-edit" onClick={(e) => setIsEdit(!isEdit)}></i>
        ) : (
          <EditIcons />
        )}

        <i className="far fa-trash-alt" onClick={(e) => handleDelete(id)}></i>
      </span>
    </li>
  );
}
