import React from "react";

export default function AddTodo({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input value={value} onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
