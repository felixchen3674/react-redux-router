import { v4 as uuidv4 } from "uuid";

const TODOS_DATA = [
  // {
  //   id: uuidv4(),
  //   title: "Cook",
  //   completed: false,
  // },
  // {
  //   id: uuidv4(),
  //   title: "Code",
  //   completed: false,
  // },
];

export const getTodos = async () => {
  return [...TODOS_DATA];
};

export const addTodo = async (todo) => {
  const newTodo = { ...todo, id: uuidv4() };
  // TODOS_DATA = [...TODOS_DATA, newTodo];
  TODOS_DATA.push(newTodo);
  return newTodo;
};
