import React from "react";

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  onSave,
  onCancel,
  isEditing,
  editText,
  setEditText,
}) => {
  return (
    <li style={{ marginTop: "10px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onSave(todo.id)}>Сақтау</button>
          <button onClick={onCancel}>Бас тарту</button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {todo.title}
          </span>
          <button onClick={() => onEdit(todo.id, todo.title)}>Өңдеу</button>
          <button onClick={() => onDelete(todo.id)}>Жою</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
