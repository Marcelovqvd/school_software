import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./global.css";

import { router } from "./routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
