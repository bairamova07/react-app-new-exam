import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onToggle,
  onDelete,
  onEdit,
  onSave,
  onCancel,
  editId,
  editText,
  setEditText,
}) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
          onCancel={onCancel}
          isEditing={editId === todo.id}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </ul>
  );
};

export default TodoList;