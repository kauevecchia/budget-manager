import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-8 py-4 bg-background">
        <Outlet />
      </main>
    </div>
  );
}
