import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
