import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import {Checkout, Detail, Earphones, Headphones, Home, Speakers} from './pages/index'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/detail/product/:slug",
          element: <Detail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
