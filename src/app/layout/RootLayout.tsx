import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import IntroCurtain from "./intro/IntroCurtain";
import IntroProvider from "./intro/IntroProvider";
import { useIntro } from "./intro/intro-context";

const Shell = () => {
  const { ready } = useIntro();

  return (
    <div className="relative min-h-svh overflow-x-clip bg-paper font-sans text-ink">
      <IntroCurtain />
      {/* Content mounts when the counter finishes so entrance animations play as the curtain lifts. */}
      {ready && (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

const RootLayout = () => (
  <IntroProvider>
    <Shell />
  </IntroProvider>
);

export default RootLayout;
