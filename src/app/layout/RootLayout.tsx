import Footer from "./Footer";
import Header from "./Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground max-w-5xl mx-auto px-4">
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default RootLayout;
