import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default App;
