import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Main />
      </App>
    ),
  },
  {
    path: "cart",
    element: (
      <App>
        <Cart />
      </App>
    ),
  },
]);

root.render(
  <div className="wrapper">
    <RouterProvider router={router} />
  </div>
);
