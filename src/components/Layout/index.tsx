import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import AsideBar from "./components/Asidebar";
import LayoutProvider from "./context";

export default function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col bg-gray-100">
        <LayoutProvider>
          <Header />
          <div className="flex flex-1 p-2 gap-2">
            <AsideBar/>
            <Main />
          </div>
          <Footer />
        </LayoutProvider>
      </div>
    </>
  )
}
