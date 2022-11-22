import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="Content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
