import { RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { router } from "./router/router";

function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;
