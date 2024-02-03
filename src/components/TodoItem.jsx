import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div>
      <div>{todo.title}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <button>Complete</button>
      </div>
    </div>
  );
}
