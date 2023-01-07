import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/searchHeader/SearchHeader";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
