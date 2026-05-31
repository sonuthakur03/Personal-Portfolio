// RootLayout.tsx
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";

// This layout component serves as the root layout for the application, providing a consistent structure with a header and footer. The Outlet component is used to render the child routes defined in the routing configuration.
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
