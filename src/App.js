import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader";

const queryClient = new QueryClient(); // 쌤은 App 컴포넌트 외부에다 적어놈
function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
