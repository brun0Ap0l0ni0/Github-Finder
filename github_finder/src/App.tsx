import { Outlet } from "react-router-dom";
import "./App.modules.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="app">
          <Outlet />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
