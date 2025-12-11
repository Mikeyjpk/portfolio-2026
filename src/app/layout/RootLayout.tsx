import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground max-w-5xl mx-auto px-4">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
