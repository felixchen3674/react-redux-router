import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import TodosListPage from "../pages/TodosListPage";
import CompletedTodosPage from "../pages/CompletedTodosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TodosListPage />,
      },
      {
        path: "/completed",
        element: <CompletedTodosPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
