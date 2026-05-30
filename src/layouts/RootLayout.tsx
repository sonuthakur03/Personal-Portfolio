import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} SONU.DEV. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
