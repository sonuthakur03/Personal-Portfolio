// App.tsx
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";

// The App component serves as the entry point of the application, rendering the RouterProvider with the defined routing configuration from AppRouter. This allows for navigation between different pages and components based on the URL path.
function App() {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
