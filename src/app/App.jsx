import { store } from "../store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Base } from "../pages/Base/Base.jsx";
import { Landing } from "../pages/Landing.jsx";
import { Add } from "../pages/Add/Add.jsx";
import { Error } from "../pages/Error/Error.jsx";
import { Create } from "../pages/Create/Create.jsx";

const router = createBrowserRouter([
  {
    path: "/debtbook/",
    errorElement: <Error />,
    children: [
      {
        path: "app",
        element: <Base />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        element: <Create />,
        path: "create",
      },
      {
        path: "",
        element: <Landing />,
      },
    ],
  },
]);

export const App = () => {
  //store.subscribe(() => console.log(store.getState()));
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
