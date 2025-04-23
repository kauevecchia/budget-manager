import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function AppLayout() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />

      <div className="px-4 flex-grow flex py-4">
        <aside className="lg:w-1/5 hidden lg:block">
          <Sidebar />
        </aside>
        <main className="p-4 flex-grow min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
