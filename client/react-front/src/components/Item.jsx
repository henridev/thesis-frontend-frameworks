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
  return (
    <li className="item">
      <div
        job="complete"
        id="0"
        onClick={(e) => handleStatusChange(id, !isComplete)}
      >
        {isComplete ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <i className="fas fa-circle"></i>
        )}
      </div>
      {isEdit ? (
        <>
          <input
            placeholder={title}
            className="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <i
            className="fas fa-spell-check"
            onClick={(e) => {
              handleTitleChange(id, newTitle);
              setIsEdit(!isEdit);
            }}
          ></i>
          <i className="fas fa-ban" onClick={(e) => setIsEdit(!isEdit)}></i>
        </>
      ) : (
        <p className="text">{title}</p>
      )}
      {!isEdit && (
        <i
          className="fas fa-edit"
          job="delete"
          id="0"
          onClick={(e) => setIsEdit(!isEdit)}
        ></i>
      )}
      <i
        className="far fa-trash-alt"
        job="delete"
        id="0"
        onClick={(e) => handleDelete(id)}
      ></i>
    </li>
  );
}
