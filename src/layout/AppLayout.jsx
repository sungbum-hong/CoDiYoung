import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "60vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}